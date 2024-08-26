import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom" 
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {Form, Button, Card, Alert } from 'react-bootstrap'
export function Signin(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const[loading, setLoading] = useState(false);

    const navigate = useNavigate()
    const auth = getAuth()
    async function handleSignIn(e){
        e.preventDefault();

        setError('')
        setLoading(true)

        signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
        .then((user) => {
            // Success...
            console.log(user)
            navigate('/home')
        })
        .catch((error) => {
            // Error
            setError('Failed to sign in to account')
            console.log(error)
        })
        setLoading(false)
    }
    return <div className="text-left w-100" style={{minWidth: "400px"}}>
         <Card>
            <Card.Body>
            <h1 className="text-center mb-4">Sign In</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form className="signUp" onSubmit={handleSignIn}>
                <Form.Group id="email">
                    <Form.Label >Email</Form.Label>
                    <Form.Control className="mb-2" type="email" ref={emailRef} required/> 
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="mb-2" type="password" ref={passwordRef} required/> 
                </Form.Group>
                <Button disabled={loading} type="submit" className="w-100 text-center mt-2">Sign In</Button>
            </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">Don't have an account? Sign Up</div>
    </div>
}