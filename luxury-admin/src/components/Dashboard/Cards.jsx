import Card from 'react-bootstrap/Card';
import '../../styles/Cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

function Cards() {
  return (
      <div className='card-container d-flex justify-content-between mt-4'>
          <Card className='a-d-top-cards w-cards'>
              <Card.Body>
                <div className='cards-square bg-body-secondary position-absolute d-inline-flex justify-content-center align-items-center p-4 rounded'>
                    <i className='card-icon-1 d-flex'>
                          <FontAwesomeIcon icon={faCircleQuestion} />
                    </i>
                </div>

                  <Card.Title className='w-100 d-flex justify-content-end'>Total User</Card.Title>
                  <h3 className='w-100 d-flex justify-content-end'>281</h3>
                  <hr />
                  <Card.Text>
                      <span>+55%</span> than last week
                  </Card.Text>
              </Card.Body>
          </Card>
          <Card className='a-d-top-cards w-cards'>
              <Card.Body>
                <div className='cards-square bg-body-secondary position-absolute d-inline-flex justify-content-center align-items-center p-4 rounded'>
                    <i className='card-icon-1 d-flex'>
                          <FontAwesomeIcon icon={faCircleQuestion} />
                    </i>
                </div>

                  <Card.Title className='w-100 d-flex justify-content-end'>Total User</Card.Title>
                  <h3 className='w-100 d-flex justify-content-end'>281</h3>
                  <hr />
                  <Card.Text>
                      <span>+55%</span> than last week
                  </Card.Text>
              </Card.Body>
          </Card>
          <Card className='a-d-top-cards w-cards'>
              <Card.Body>
                <div className='cards-square bg-body-secondary position-absolute d-inline-flex justify-content-center align-items-center p-4 rounded'>
                    <i className='card-icon-1 d-flex'>
                          <FontAwesomeIcon icon={faCircleQuestion} />
                    </i>
                </div>

                  <Card.Title className='w-100 d-flex justify-content-end'>Total User</Card.Title>
                  <h3 className='w-100 d-flex justify-content-end'>281</h3>
                  <hr />
                  <Card.Text>
                      <span>+55%</span> than last week
                  </Card.Text>
              </Card.Body>
          </Card>
          <Card className='a-d-top-cards w-cards'>
              <Card.Body>
                <div className='cards-square bg-body-secondary position-absolute d-inline-flex justify-content-center align-items-center p-4 rounded'>
                    <i className='card-icon-1 d-flex'>
                          <FontAwesomeIcon icon={faCircleQuestion} />
                    </i>
                </div>

                  <Card.Title className='w-100 d-flex justify-content-end'>Total User</Card.Title>
                  <h3 className='w-100 d-flex justify-content-end'>281</h3>
                  <hr />
                  <Card.Text>
                      <span>+55%</span> than last week
                  </Card.Text>
              </Card.Body>
          </Card>
      </div>

      
  )
}

export default Cards