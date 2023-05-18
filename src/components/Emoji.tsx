import { HStack, Icon } from "@chakra-ui/react";
import { BsStar, BsStarFill } from "react-icons/bs";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const fillStar = [];
  const star = [];

  for (let i = 0; i < rating; i++) {
    fillStar.push(i);
  }
  for (let i = 5; i > rating; i--) {
    star.push(i);
  }

  return (
    <HStack>
      {fillStar.map((star) => (
        <Icon key={star} as={BsStarFill} color="yellow.300" boxSize="25px" />
      ))}
      {star.map((star) => (
        <Icon key={star} as={BsStar} color="yellow.300" boxSize="25px" />
      ))}
    </HStack>
  );
};

export default Emoji;
