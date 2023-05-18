import { HStack, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack paddingY={2}>
      <Skeleton boxSize="32px" borderRadius={8} />
      <Skeleton height="12px" width="150px" borderRadius={5} />
    </HStack>
  );
};

export default GenreListSkeleton;
