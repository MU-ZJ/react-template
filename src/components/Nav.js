import { NavLink } from 'react-router-dom';
/* import { Button, Modal, Content } from 'react-bulma-components'; */

function Nav() {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-start">
        <NavLink to='/' className="navbar-item">Home</NavLink>
        <NavLink to='/content' className="navbar-item">Content</NavLink>
        <NavLink to='/gallery' className="navbar-item">Gallery</NavLink>
      </div>

{/*
      <Button.Group renderAs={function noRefCheck(){}}>
    <Button
      color="info"
      onClick={function noRefCheck(){}}
    >
      Open Card Modal
    </Button>
      </Button.Group>
  <Modal
    onClose={function noRefCheck(){}}
  >
    <Modal.Card>
      <Modal.Card.Head>
        <Modal.Card.Title>
          Title
        </Modal.Card.Title>
      </Modal.Card.Head>
      <Modal.Card.Body>
            <Content>
              <p>
              </p>
            </Content>
      </Modal.Card.Body>
      <Modal.Card.Foot
        align="right"
        hasAddons
        renderAs={function noRefCheck(){}}
      >
        <Button color="success">
          Like
        </Button>
        <Button>
          Share
        </Button>
      </Modal.Card.Foot>
    </Modal.Card>
  </Modal>
      <div className="navbar-end">
        <Modal>
        </Modal>
      </div>

<button className="js-modal-trigger navbar-item button is-primary" data-target="modal-js-example" onClick={toggleClass}>
  Login/Sign Up
</button>
 */}
    </nav>
  )
}

export default Nav
