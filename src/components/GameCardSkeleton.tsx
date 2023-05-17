import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width={400} borderRadius={10} overflow={"hidden"}>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText height="100px" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
