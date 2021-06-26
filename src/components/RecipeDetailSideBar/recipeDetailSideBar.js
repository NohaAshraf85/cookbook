import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
function RecipeDetailSideBar() {
    return(
        <div className="RecipeDetailSideBar">
            <Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card>
        </div>
    );
};
export default RecipeDetailSideBar;