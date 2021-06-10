import _ from "lodash";
import { Card, CardColumns } from "react-bootstrap";
import { ContentsIE } from "../../api/GetAPI/interface";

const gridItem = (item: ContentsIE, index: number, style: any) => {
  return (
    <Card key={`Contents_item_key${index}`}>
      <Card.Img variant="top" src={item.imageLink} />
      <Card.Body style={{ backgroundColor: style.backgroundColor }}>
        <Card.Title style={{ color: style.color }}>{item.title}</Card.Title>
        <Card.Subtitle style={{ color: style.color }}>
          {item.subTitle}
        </Card.Subtitle>
        <Card.Text style={{ color: style.color }}>{item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default (props: any) => {
  return (
    <CardColumns>
      {!_.isEmpty(props.cards) &&
        props.cards.map((card: ContentsIE, index: number) =>
          gridItem(card, index, props.style)
        )}
    </CardColumns>
  );
};
