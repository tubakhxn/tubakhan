"use client";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Check, Edit, X } from "lucide-react";

// Define the User type
type User = {
  socketId: string;
  name: string;
  color: string;
};

const OnlineUsers = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainer = useRef<HTMLDivElement>(null);

  // Mock users data
  const [users] = useState<User[]>([
    { socketId: "1", name: "User1", color: "#FF5733" },
    { socketId: "2", name: "User2", color: "#33FF57" },
  ]);
  const [msgs] = useState([
    { socketId: "1", username: "User1", content: "Hello" },
    { socketId: "2", username: "User2", content: "Hi there!" },
  ]);

  const containerScrollBottom = () => {
    const t = setTimeout(() => {
      if (chatContainer.current) {
        chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
      }
      clearTimeout(t);
    }, 1);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const sendMessage = () => {
    if (!inputRef.current?.value) return;
    const msg = inputRef.current.value;
    inputRef.current.value = "";

    if (msg.trim() === "") return;

    // For now, we're just logging the message as the socket code is removed
    console.log("Message Sent:", msg);
  };

  const updateUsername = (newName: string) => {
    // For now, we'll just log the updated username
    console.log("Username updated to:", newName);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="p-0 m-0 mr-4 h-fit w-fit transition-opacity duration-150"
        >
          <div className="relative flex flex-col gap-2">
            <div className="flex items-center gap-2 h-fit">
              <div className="w-2 h-2 animate-pulse rounded-full bg-green-400"></div>
              {users.length} online
            </div>
            <div className="absolute bottom-0 right-0 h-2 text-[.13rem]"></div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Tabs
          defaultValue="account"
          className="w-full h-[30rem] flex flex-col items-center no-hover-zone"
          onValueChange={(activeTab) => {
            if (activeTab === "chat") containerScrollBottom();
          }}
        >
          <TabsList className="w-full h-8">
            <TabsTrigger className="w-1/2 h-full" value="users">
              Users
            </TabsTrigger>
            <TabsTrigger className="w-1/2 h-full" value="chat">
              Chat
            </TabsTrigger>
          </TabsList>
          <TabsContent value="users" className="w-full h-full overflow-auto">
            <ScrollArea className="w-full h-full modall">
              <motion.div>
                <div className="space-y-2 mb-8">
                  <p className="text-sm text-muted-foreground text-center">
                    There {users.length === 1 ? "is" : "are"} {users.length}{" "}
                    user{users.length === 1 ? "" : "s"} online here!
                  </p>
                  {users.length <= 1 && (
                    <p className="text-xs font-mono text-muted-foreground text-center text-yellow-600">
                      (This is a feature not a bug
                      <br /> invite some friends!)
                    </p>
                  )}
                </div>
                <motion.ul
                  className="grid gap-4"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {users.map((user, i) => (
                    <UserItem
                      key={i}
                      user={user}
                      updateUsername={updateUsername}
                    />
                  ))}
                </motion.ul>
              </motion.div>
            </ScrollArea>
          </TabsContent>
          <TabsContent
            value="chat"
            className="w-full flex-1 overflow-auto flex flex-col"
          >
            <div
              className="w-full h-full modall overflow-auto"
              ref={chatContainer}
            >
              {msgs.map((msg, i) => (
                <div key={i}>
                  <span>
                    <span
                      style={{
                        color:
                          users.find((u) => u.socketId === msg.socketId)
                            ?.color || "#777",
                      }}
                      className="mr-2"
                    >
                      {msg.username}: 
                    </span>
                    <span className="font-mono">{msg.content}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full h-20 flex items-center gap-2">
              <Input
                className="flex-1"
                ref={inputRef}
                placeholder="Enter message"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <Button onClick={sendMessage}>Send</Button>
            </div>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};

export default OnlineUsers;

const UserItem = ({
  user,
  updateUsername,
}: {
  user: User;
  updateUsername: (username: string) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditingName, setIsEditingName] = React.useState(false);
  const [newUsername, setNewUsername] = React.useState(user.name);

  const cancelEditing = () => {
    setNewUsername(user.name);
    setIsEditingName(false);
  };

  const saveEdit = () => {
    updateUsername(newUsername);
    setIsEditingName(false);
  };

  return (
    <motion.li
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: user.color }}
        ></div>
        {isEditingName ? (
          <>
            <Input
              value={newUsername}
              ref={inputRef}
              onChange={(e) => setNewUsername(e.target.value)}
              className="w-40"
              onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            />
            <Button variant={"ghost"} onClick={cancelEditing}>
              <X className="w-4 h-4" />
            </Button>
            <Button variant={"ghost"} onClick={saveEdit}>
              <Check className="w-4 h-4" />
            </Button>
          </>
        ) : (
          <>
            <span className="text-sm">{user.name}</span>
            <Button
              className="py-0 my-0"
              variant={"ghost"}
              onClick={() => setIsEditingName(true)}
            >
              <Edit className="w-4 h-4" />
            </Button>
          </>
        )}
      </div>
    </motion.li>
  );
};
