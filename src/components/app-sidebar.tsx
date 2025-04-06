// import { createServerSupabaseClient } from '@/lib/supabase/server2';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const links = [
  {
    title: "Home",
    url: "#",
    icon: 'pi pi-home',
  },
  {
    title: "Inbox",
    url: "#",
    icon: 'pi pi-inbox',
  },
  {
    title: "Calendar",
    url: "#",
    icon: 'pi pi-calendar',
  },
  {
    title: "Search",
    url: "#",
    icon: 'pi pi-search',
  },
  {
    title: "Settings",
    url: "#",
    icon: 'pi pi-cog',
  },
]

// type Link = {
//   title: string
//   url: string
//   icon: any
// }

export function AppSidebar() {
  // const supabase = createServerSupabaseClient()
  // const { data: dataLinks, error: errorLinks } = await supabase
  //   .from('sidebar_links')
  //   .select('title, url, icon')
  //   .eq('is_active', true);

  // if (errorLinks) {
  //   return <div>Error: {errorLinks.message}</div>;
  // }

  // if (!dataLinks || dataLinks.length === 0) {
  //   return <div>No links found</div>;
  // }
  // const [links, setLinks] = useState<Link[]>([]);
  // const [error, setError] = useState<Error | null>(null);
  // const [loading, setLoading] = useState(true)


  // useEffect(() => {
  //   const fetchLinks = async () => {
  //     try {
  //       const { data: dataLinks, error: errorLinks } = await (await supabase)
  //         .from("sidebar_links")
  //         .select("title, url, icon")
  //         .eq("is_active", true);

  //       if (errorLinks) {
  //         throw errorLinks;
  //       }

  //       setLinks(dataLinks || []);
  //     } catch (err) {
  //       setError(err as Error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchLinks();
  // }, [supabase]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // if (links.length === 0) {
  //   return <div>No links found</div>;
  // }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <i className={`pi ${item.icon}`}></i>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
