import React from "react";
import AuthService from "./service/Usuario.service";
import Card from "react-bootstrap/Card";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            <h3>{currentUser.username}</h3>
          </Card.Title>
          <Card.Text>
            <strong>Email:</strong>
            <p>{currentUser.email}</p>
          </Card.Text>
          <Card.Text>
            <strong>Authorities:</strong>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => <p key={index}>{role}</p>)}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
