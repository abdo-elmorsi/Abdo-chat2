import {
  Button,
  Card,
  Col,
  Form,
  FormLabel,
  Row,
  Spinner,
} from "react-bootstrap";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import ImageLoader from "../../components/Image-loader";
import { useDispatch } from "react-redux";
import { getUser } from "../../lib/slices/auth";
import { useState } from "react";




const Signin = () => {
  const [Name, setName] = useState('')
  const [UserIcon, setUserIcon] = useState('icon1');
  const [Remember, setRemember] = useState(true);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    if (Name.trim() !== "" && Name.trim().length > 5) {
      Cookies.set("User", JSON.stringify({ Name: Name, UserIcon: UserIcon }), { expires: Remember ? 12 : 1 });
      setTimeout(() => {
        toast.success("Login Success");
        dispatch(getUser({ Name: Name, UserIcon: UserIcon }))
      }, 2000);
    } else {
      setTimeout(() => {
        setloading(false);
        toast.error("Your name must be more than 5 letters.");
      }, 2000);
    }
  }
  return (
    <>
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <Col md="6">
            <Row className="justify-content-center">
              <Col md="10">
                <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <ImageLoader
                        src="/assets/images/chat-logo.png"
                        style={{ objectFit: "contain", margin: "5px auto" }}
                        quality={100}
                        alt="sign in logo"
                        width={'60%'}
                      />
                    </div>
                    <h2 className="mb-4 text-center">Sign In</h2>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                      <Row>
                        <Col lg="12">
                          <Form.Group className="form-group">
                            <FormLabel htmlFor="username" className="">
                              Username
                            </FormLabel>
                            <Form.Control
                              value={Name}
                              onChange={(e) => setName(e.target.value)}
                              type="text"
                              id="username"
                              name="username"
                              placeholder=""

                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12 my-3">
                          <Row>
                            <Col xs={'6 mb-2 text-center'} lg={3}  >
                              <Button className={` ${UserIcon === 'icon1' ? '' : 'bg-secondary border-secondary'}`} onClick={(e) => { setUserIcon('icon1') }}>
                                <ImageLoader className={` ${UserIcon === 'icon1' ? 'rounded' : 'rounded-circle'}`} width={50} height={50} src={'/assets/images/icon1.png'} alt="" />
                              </Button>
                            </Col>
                            <Col xs={'6 mb-2 text-center'} lg={3}  >
                              <Button className={` ${UserIcon === 'icon2' ? '' : 'bg-secondary border-secondary'}`} onClick={(e) => { setUserIcon('icon2') }}>
                                <ImageLoader className={` ${UserIcon === 'icon2' ? 'rounded' : 'rounded-circle'}`} width={50} height={50} src="/assets/images/icon2.png" alt="" />
                              </Button>
                            </Col>
                            <Col xs={'6 mb-2 text-center'} lg={3}  >
                              <Button className={` ${UserIcon === 'icon3' ? '' : 'bg-secondary border-secondary'}`} onClick={(e) => { setUserIcon('icon3') }}>
                                <ImageLoader className={` ${UserIcon === 'icon3' ? 'rounded' : 'rounded-circle'}`} width={50} height={50} src="/assets/images/icon3.png" alt="" />
                              </Button>
                            </Col>
                            <Col xs={'6 mb-2 text-center'} lg={3}  >
                              <Button className={` ${UserIcon === 'icon4' ? '' : 'bg-secondary border-secondary'}`} onClick={(e) => { setUserIcon('icon4') }}>
                                <ImageLoader className={` ${UserIcon === 'icon4' ? 'rounded' : 'rounded-circle'}`} width={50} height={50} src="/assets/images/icon4.png" alt="" />
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                        <Col
                          lg="12"
                          className="d-flex justify-content-between"
                        >
                          <Form.Check className="form-check mb-3">
                            <Form.Check.Input
                              value={Remember}
                              onChange={(e) => setRemember(e.target.checked)}
                              type="checkbox"
                              name="remember_me"
                              id="customCheck1"
                            />
                            <Form.Check.Label htmlFor="customCheck1">
                              Remember Me
                            </Form.Check.Label>
                          </Form.Check>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-center">
                        <Button
                          type="submit"
                          variant="primary"
                        >
                          <span>Sign In</span>
                          {loading &&
                            <Spinner
                              as="span"
                              role="status"
                              style={{ verticalAlign: "sub" }}
                              className="mx-1"
                              aria-hidden="true"
                              size="sm"
                              animation="border"
                            />
                          }
                        </Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="sign-bg">
              <svg
                width="280"
                height="230"
                viewBox="0 0 431 398"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.05">
                  <rect
                    x="-157.085"
                    y="193.773"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 -157.085 193.773)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="7.46875"
                    y="358.327"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 7.46875 358.327)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="61.9355"
                    y="138.545"
                    width="310.286"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 61.9355 138.545)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="62.3154"
                    y="-190.173"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 62.3154 -190.173)"
                    fill="#3B8AFF"
                  />
                </g>
              </svg>
            </div>
          </Col>
          <Col
            md="6"
            className="d-md-block d-none bg-primary p-0 vh-100 overflow-hidden "
          >
            <ImageLoader
              src="https://www.pngitem.com/pimgs/m/181-1813977_shapes-background-png-free-transparent-png.png"
              style={{ objectFit: "fill" }}
              quality={100}
              width={'100%'}
              height={'100%'}
              alt="sign in background"
            />
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Signin;
// 987654321