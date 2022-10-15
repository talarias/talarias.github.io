import { FeedPersonIcon } from '@primer/octicons-react'
import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import ButtonClose from '../ButtonClose/ButtonClose'

import './login.scss'

function Login () {
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessege, setErrorMessege] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const login = () => {
    async function postData (url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors', // todo
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      })
      return response
    }

    setIsLoading(true)
    setErrorMessege('')
    postData('https://example.com/answer', { answer: 42 })
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          setErrorMessege('Error')
        } else {
          console.log(response)
        }
        setIsLoading(false)
      })
  }

  return (
    <>
    <div className='sign-in-btn' onClick={handleShow}>
      <FeedPersonIcon size={30} />
    </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title><span><FeedPersonIcon size={30} /></span>Sign in</Modal.Title>
          <ButtonClose onClick={handleClose}/>
        </Modal.Header>
        <Modal.Body>
          <p className='error-messege'>
            {errorMessege}
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="loginForm.username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="loginForm.password"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={login} className={'formAction isLoading-' + isLoading} disabled={isLoading}>
            {
              !isLoading ? 'Sign in' : <Spinner animation="border" as="span" size="sm" role="status" />
            }
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Login
