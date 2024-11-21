import { Tag, Users, Settings, Bookmark, SquarePen, LayoutGrid, LucideIcon } from "lucide-react";

type Submenu = {
	href: string;
	label: string;
	active: boolean;
};

type Menu = {
	href: string;
	label: string;
	active: boolean;
	icon: string;
	submenus: Submenu[];
};

export function getMenuList(pathname: string): Menu[] {
	return [
		{
			href: "/dashboard",
			label: "Dashboard",
			active: pathname.includes("/dashboard"),
			icon: "mdi:view-dashboard",
			submenus: [],
		},
		{
			href: "",
			label: "Quản lý bài viết",
			active: pathname.includes("/posts"),
			icon: "mdi:view-dashboard",
			submenus: [
				{
					href: "/posts",
					label: "Danh sách bài viết",
					active: pathname === "/posts",
				},
				{
					href: "/posts/new",
					label: "Bài viết mới nhất",
					active: pathname === "/posts/new",
				},
			],
		},
		{
			href: "/categories",
			label: "Danh mục bài viết",
			active: pathname.includes("/categories"),
			icon: "mdi:view-dashboard",
			submenus: [],
		},

		{
			href: "/users",
			label: "Quản lý người dùng",
			active: pathname.includes("/users"),
			icon: "mdi:account-group",
			submenus: [],
		},
		{
			href: "/account",
			label: "Cấu hình hệ thống",
			active: pathname.includes("/account"),
			icon: "mdi:settings",
			submenus: [],
		},
	];
}
