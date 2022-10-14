import { FeedPersonIcon } from '@primer/octicons-react'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import ButtonClose from '../ButtonClose/ButtonClose'

import './login.scss'

function Login () {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
          <Button variant="primary">Sign in</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Login
