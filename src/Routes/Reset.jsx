import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom" 
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import {Form, Button, Card, Alert } from 'react-bootstrap'

export function Reset(){
    
    const emailRef = useRef()
    const [error, setError] = useState('')
    const[loading, setLoading] = useState(false);
    const [reset, setReset] = useState('')

    const navigate = useNavigate()
    const auth = getAuth()
    async function handleReset(e){
        e.preventDefault();
       
        setError('')
        setReset('')
        setLoading(true)
        
        sendPasswordResetEmail(auth,emailRef.current.value)
        .then((user) => {
            // Success...
            console.log(user)
            setReset('Check email and return to Sign In page')
            //navigate('/home')
        })
        .catch((error) => {
            // Error
            setError('Email not found')
            console.log(error)
        })
        setLoading(false)
    }
    
    return <div className="text-left w-100" style={{minWidth: "400px"}}>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Reset Password</h2>{console.log(auth.currentUser)}
            {error && <Alert variant="danger">{error}</Alert>}
            {reset && <Alert variant="success">{reset}</Alert>}
            <Form className="resetEmail" onSubmit={handleReset}>
                <Form.Group id="email">
                    <Form.Label >Reset with Email</Form.Label>
                    <Form.Control className="mb-2" type="email" ref={emailRef} required/> 
                </Form.Group>
        
                <Button disabled={loading || reset} type="submit" className="w-100 text-center mt-2">Send Reset Instructions</Button>
            </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">Remembered your password? Go back to <Link to='/signin'>Sign In</Link></div>
    </div>
}