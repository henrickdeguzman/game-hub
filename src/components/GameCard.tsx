import {
  Card,
  CardBody,
  Heading,
  Image,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Stack justifyContent="space-between">
          <Heading size={"lg"} height="110px">
            {game.name}
          </Heading>
          <Emoji rating={game.rating_top} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
