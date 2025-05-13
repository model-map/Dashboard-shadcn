import { AppAreaChart } from "@/components/homepage/AppAreaChart";
import { AppBarChart } from "@/components/homepage/AppBarChart";
import { AppPieChart } from "@/components/homepage/AppPieChart";
import CardList from "@/components/homepage/CardList";
import TodoList from "@/components/homepage/TodoList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 pb-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions"></CardList>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg h-full w-full">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
}
