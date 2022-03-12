import React, { useEffect, useState } from "react";
import upload from "../../../service/ApiService/UploadApiService";
import getProjects from "../../../service/ApiService/ProjectsApiService";
import CardComponent from "../../components/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const EventsScreen: React.FC = () => {
  const [file, setFile] = useState<File>();
  const [projects, setProjects] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const handleClose = function (): void {
    setShow(!show);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    upload(file!);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log("file changed");
    setFile(event.target.files![0]);
  };

  const fetchProjects = async function (): Promise<void> {
    setLoading(true);
    const data: { projects: Array<string> } = await getProjects();
    setProjects(data.projects);
    console.log(projects);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <p className="events-header">Events</p>
      <div className="card-container">
        {projects.map((project) => (
          <Link to={`/project/${project}`}>
            <CardComponent title={loading ? "loading.." : project} />
          </Link>
        ))}
        <button className="add-events-button" onClick={() => setShow(!show)}>
          Add Event
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        className="add-event-modal"
        centered
      >
        <Modal.Header>
          <Modal.Title>Add event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <input type="text" name="name" />
            <input type="file" name="csv" />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EventsScreen;
