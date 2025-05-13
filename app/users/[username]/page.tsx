import CardList from "@/components/homepage/CardList";

import UserBadges from "../../../components/users/username/UserBadges";
import UserInformationCenter from "../../../components/users/username/UserInformationCenter";
import UserBreadcrumbs from "../../../components/users/username/UserBreadcrumbs";
import UserCardContainer from "@/components/users/username/UserCardContainer";
import UserChartContainer from "@/components/users/username/UserChartContainer";

const SingleUserPage = () => {
  return (
    <div>
      {/* BREADCRUMBS */}
      <UserBreadcrumbs />
      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USER BADGES CONTAINER */}
          <UserBadges />
          {/* INFORMATION CONTAINER */}
          <UserInformationCenter />
          {/* CARD LIST */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* USER CARD CONTAINER */}
          <UserCardContainer />
          {/* CHART CONTAINER */}
          <UserChartContainer />
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
