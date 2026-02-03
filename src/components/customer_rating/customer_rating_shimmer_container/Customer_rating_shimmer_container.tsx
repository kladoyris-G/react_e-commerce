import Skeleton from "@mui/material/Skeleton";

const CustomerRatingShimmer: React.FC = () => {
  return (
    <div className="card p-4 w-100">
      <Skeleton variant="text" width={120} height={28} />

      <div className="py-2">
        <Skeleton variant="text" width={160} height={24} />
      </div>

      <div>
        <Skeleton variant="text" width="90%" height={22} />
        <Skeleton variant="text" width="85%" height={22} />
      </div>
    </div>
  );
};

export default CustomerRatingShimmer;
