import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// NOTE: Ensure these paths and components are correct. 
// If 'CompactHeader' and 'Button' are not in the specified paths, you may get new errors.
//import { CompactHeader } from "./notehubbot";
import { Button } from "@/components/Button";

// ✅ Import the ChatProvider + ChatContext + Components
// These imports now work because you created ChatProvider.jsx, ChatRoomList.jsx, and ChatWindow.jsx
import { ChatProvider } from "./ChatProvider";
import { ChatContext } from "./ChatProvider";
import ChatRoomList from "./ChatRoomList";
import ChatWindow from "./ChatWindow";

export default function Chat() {
    const [showButton, setShowButton] = useState(false);

    // ✅ Scroll to top button logic
    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.pageYOffset > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // ✅ Dark Mode handling (This is based on your original provided code)
    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    return (
        <>
            <Head>
                <title>NoteHub Chat - Real-Time Chat for Students</title>
                <meta name="description" content="Engage in real-time chat with students" />
            </Head>

            <main className="flex min-h-screen flex-col bg-indigo-50 dark:bg-gray-900">
                

                <section className="flex flex-1 flex-col py-2 sm:py-6">
                    <div className="container mx-auto max-w-5xl flex-1 flex-col px-2 sm:px-4">
                        <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-white sm:mb-6 sm:text-3xl">
                            NoteHub Live Chat
                        </h1>

                        {/* Wrap the core chat UI with the ChatProvider */}
                        <ChatProvider>
                            <ChatContext.Consumer>
                                {({ rooms, activePageUsers, user }) => (
                                    <div className="flex flex-1 flex-col overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800 sm:rounded-2xl sm:shadow-2xl sm:flex-row">

                                        {/* ChatRoomList (Left Sidebar) */}
                                        <ChatRoomList
                                            rooms={rooms}
                                            activePageUsers={activePageUsers}
                                        />

                                        {/* ChatWindow (Main Content) - Now connected to Gemini API via ChatProvider */}
                                        <ChatWindow user={user} />
                                    </div>
                                )}
                            </ChatContext.Consumer>
                        </ChatProvider>
                    </div>
                </section>

                {showButton && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 rounded-full bg-blue-600 px-4 py-3 text-white shadow hover:bg-blue-700"
                    >
                        ↑
                    </button>
                )}
            </main>
        </>
    );
}