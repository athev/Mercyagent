import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import ProfileHeader from "@/components/profile/ProfileHeader";
import QuickActions from "@/components/profile/QuickActions";
import DNASummaryWidget from "@/components/profile/DNASummaryWidget";
import CoursesWidget from "@/components/profile/CoursesWidget";
import ToolsWidget from "@/components/profile/ToolsWidget";
import AgentsWidget from "@/components/profile/AgentsWidget";
import TicketsWidget from "@/components/profile/TicketsWidget";
import ActivityFeed from "@/components/profile/ActivityFeed";
import HPNavbar from "@/components/homepage/HPNavbar";

export default async function ProfilePage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/");
    }

    const userId = session.user.id;

    const userWithData = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            dna: { include: { products: true } },
            courses: { orderBy: { updatedAt: 'desc' } },
            tools: { orderBy: { createdAt: 'desc' } },
            agents: { orderBy: { createdAt: 'desc' } },
            tickets: { orderBy: { updatedAt: 'desc' } }
        }
    });

    const dna = userWithData?.dna;
    const courses = userWithData?.courses || [];
    const tools = userWithData?.tools || [];
    const agents = userWithData?.agents || [];
    const tickets = userWithData?.tickets || [];

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
            {/* Global Navbar */}
            <HPNavbar />

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
                {/* User Header Block */}
                <ProfileHeader />

                {/* Direct Access Section */}
                <QuickActions />

                {/* Dynamic Analytics & Activity Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Panel: Primary Context */}
                    <div className="lg:col-span-4 space-y-8">
                        <DNASummaryWidget dna={dna} />
                        <TicketsWidget tickets={tickets} />
                    </div>

                    {/* Right Panel: Operations & Learning */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <CoursesWidget courses={courses} />
                            <ToolsWidget tools={tools} />
                        </div>
                        <AgentsWidget agents={agents} />
                        
                        {/* System Timeline */}
                        <ActivityFeed />
                    </div>
                </div>
            </div>

            {/* Layout Footer Buffer */}
            <div className="h-20" />
        </main>
    );
}
