import { default as Sidebar } from "../../components/ActiveNowSidebar";

export default function ActiveNowSidebar() {
  return (
    <Sidebar>
      <Sidebar.Head>Active Now</Sidebar.Head>
      <Sidebar.Empty>
        <Sidebar.EmptyHead>It's quiet for now...</Sidebar.EmptyHead>
        <Sidebar.EmptyText>
          When a friend starts an activity—like playing a game or hanging out on
          voice—we’ll show it here!
        </Sidebar.EmptyText>
      </Sidebar.Empty>
    </Sidebar>
  );
}
