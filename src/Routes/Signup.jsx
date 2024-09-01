import { useState, useRef } from "react"
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { Link, useNavigate } from "react-router-dom"
import {Form, Button, Card, Alert } from 'react-bootstrap'
import logo from '../assets/logo.png';
export function Signup(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const[loading, setLoading] = useState(false);

    const navigate = useNavigate()
    const auth = getAuth()
    async function handleSignup(e){
        e.preventDefault();
        if(passwordConfirmRef.current.value !== passwordRef.current.value){
            return setError('Passwords do not match')
        }
        setError('')
        setLoading(true)
        
        createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
        .then((user) => {
            // Success...
            console.log(user)
            navigate('/home')
        })
        .catch((error) => {
            // Error
            setError('Failed to create an account')
            console.log(error)
        })
        setLoading(false)
    }
    return <div className="text-left w-100" style={{minWidth: "400px"}}>
        <Card>
            <Card.Body>
            <img className="logo" src={logo} />
            <h2 className="text-center mb-4">Website<br></br>Personalization</h2>
            {console.log(auth.currentUser)}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form className="signUp" onSubmit={handleSignup}>
                <Form.Group id="email">
                    <Form.Label >Email</Form.Label>
                    <Form.Control className="mb-2" type="email" ref={emailRef} required/> 
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="mb-2" type="password" ref={passwordRef} required/> 
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control className="mb-2" type="password" ref={passwordConfirmRef} required/> 
                </Form.Group>
                <Button disabled={loading} type="submit" className="w-100 text-center mt-2">Get Started</Button>
            </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">Already have an account? <Link to='/signin'>Sign In</Link></div>
    </div>
}