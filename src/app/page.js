import ChannelBar from "@/components/layout/channel-bar";
import ContentContainer from "@/components/layout/content-container";
import SideBar from "@/components/layout/sidebar";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <SideBar />
        <ChannelBar />
        <ContentContainer />
      </div>
    </main>
  );
}
