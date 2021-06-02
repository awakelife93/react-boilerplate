import _ from "lodash";
import { Card, CardColumns } from "react-bootstrap";
import { ContentIE } from "../../api/GetAPI/interface";

const gridItem = (item: ContentIE, index: number) => {
  return (
    <Card key={`Contents_item_key${index}`}>
      <Card.Img variant="top" src={item.imageLink} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Subtitle>{item.subTitle}</Card.Subtitle>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default (props: any) => {
  return (
    <CardColumns>
      {!_.isEmpty(props.cards) &&
        props.cards.map((card: ContentIE, index: number) =>
          gridItem(card, index)
        )}
    </CardColumns>
  );
};
