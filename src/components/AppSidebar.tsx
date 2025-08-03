import { useState } from "react"
import { GraduationCap, Home, BookOpen, Users, Calendar, Settings, ChevronRight } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const mainItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "All Classes", url: "/classes", icon: GraduationCap },
  { title: "Schedule", url: "/schedule", icon: Calendar },
]

const classItems = [
  { title: "Grade 1", url: "/classes/grade-1", icon: BookOpen },
  { title: "Grade 2", url: "/classes/grade-2", icon: BookOpen },
  { title: "Grade 3", url: "/classes/grade-3", icon: BookOpen },
  { title: "Grade 4", url: "/classes/grade-4", icon: BookOpen },
  { title: "Grade 5", url: "/classes/grade-5", icon: BookOpen },
  { title: "Grade 6", url: "/classes/grade-6", icon: BookOpen },
  { title: "Grade 7", url: "/classes/grade-7", icon: BookOpen },
  { title: "Grade 8", url: "/classes/grade-8", icon: BookOpen },
  { title: "Grade 9", url: "/classes/grade-9", icon: BookOpen },
  { title: "Grade 10", url: "/classes/grade-10", icon: BookOpen },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary text-primary-foreground font-medium" : "text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"

  return (
    <Sidebar
      className={isCollapsed ? "w-14" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent className="bg-card">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-lg text-foreground">EduCenter</h2>
                <p className="text-xs text-muted-foreground">Online Learning</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Classes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {classItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && (
                        <>
                          <span>{item.title}</span>
                          <ChevronRight className="h-3 w-3 ml-auto" />
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/settings" className={getNavCls}>
                    <Settings className="h-4 w-4" />
                    {!isCollapsed && <span>Settings</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}