import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BellIcon } from "@radix-ui/react-icons";

interface Notification {
  id: number;
  name?: string;
  message: string;
  time: string;
  avatar?: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    name: "Jeremiah Minsk",
    message: "mentioned you in a comment.",
    time: "2 minutes ago",
    avatar: "https://ecme-react.themenate.net/img/avatars/thumb-2.jpg",
  },
  {
    id: 2,
    name: "Max Alexander",
    message: "invited you to a new project.",
    time: "10 minutes ago",
    avatar: "https://ecme-react.themenate.net/img/avatars/thumb-3.jpg",
  },
  {
    id: 3,
    message: "Please submit your daily report.",
    time: "3 hours ago",
  },
];

const NotificationDropdown: React.FC = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className="relative w-14 h-14 rounded flex items-center justify-center cursor-pointer">
          <span className="dark:bg-uxSecoundryBg2 bg-uxLightBgIcon dark:text-white text-uxLightTextIcon w-10 h-10 rounded-full flex items-center justify-center dark:gradient-border hover:animate-vibrate">
            <BellIcon className="hover:animate-vibrate" />
          </span>
          {/* Badge */}
          <div className="absolute -top-2 right-0 bg-uxBgRed text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {notifications.length}
          </div>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        align="end"
        sideOffset={5}
        className="bg-white mt-2 dark:bg-darkBg text-black dark:text-white rounded-md shadow-lg w-80 p-4 transform transition-transform duration-200 ease-out origin-top-right"
      >
        <h3 className="text-lg font-semibold mb-2">Notifications</h3>

        {/* Notification List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-3">
              {notification.avatar ? (
                <img
                  src={notification.avatar}
                  alt={`${notification.name || "Notification"} avatar`}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">
                  <BellIcon className="text-white" />
                </div>
              )}

              <div className="flex-1">
                <p className="text-sm font-semibold">
                  {notification.name ? (
                    <span className="text-white">{notification.name}</span>
                  ) : null}{" "}
                  {notification.message}
                </p>
                <p className="text-xs text-gray-400">{notification.time}</p>
              </div>
              <span className="w-2 h-2 bg-gray-400 rounded-full self-center"></span>
            </div>
          ))}
        </div>

        {/* View All Activity Button */}
        <button className="mt-4 w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 focus:outline-none">
          View All Activity
        </button>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default NotificationDropdown;
