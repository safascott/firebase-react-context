
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export function CreatePersonalization(props) {
    

    
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Create a personalized experience
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
            {console.log(props)}
            </p>
            <Form.Label htmlFor="basic-url">Website & path for personalization</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                https://sitescaler.ai
                </InputGroup.Text>
                <Form.Control id="basic-url" aria-describedby="basic-addon3" defaultValue="/" />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                Text Element
                </InputGroup.Text>
                <Form.Control id="basic-url" aria-describedby="basic-addon3" defaultValue="#sitescaler-h1" placeholder=".class-name, #id-name, or querySelector" />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                Target IP
                </InputGroup.Text>
                <Form.Control id="basic-url" aria-describedby="basic-addon3" defaultValue={(props["data"] && props["data"]["ip"]) && props['data']['ip'] } />
            </InputGroup>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary">Create Personalization</Button>
        </Modal.Footer>
        </Modal>
    );
}