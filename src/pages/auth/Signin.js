import {
  Button,
  Card,
  Col,
  Form,
  FormLabel,
  Row,
  Spinner,
} from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import ImageLoader from "../../components/Image-loader";
import { useDispatch } from "react-redux";
import { getUser } from "../../lib/slices/auth";

const loginSchema = yup.object({
  username: yup.string().required("Required"),
  password: yup.string()
    .required("Required")
    .min(5, 'It must be more than 5 numbers')
    .max(15, 'It must be less than 15 numbers')
});

const initialValues = {
  username: "",
  password: "",
  remember_me: false,
  gender: false,
};

const Signin = () => {
  const dispatch = useDispatch();
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
                        src="/assets/images/learn-en-logo.png"
                        style={{ objectFit: "contain", margin: "5px auto" }}
                        quality={100}
                        alt="sign in logo"
                        width={'60%'}
                      />
                    </div>
                    <h2 className="mb-4 text-center">Sign In</h2>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={loginSchema}
                      onSubmit={(
                        { username, password, remember_me, gender },
                        { setSubmitting }
                      ) => {
                        setSubmitting(true);
                        if (username !== "" && password === "123456") {
                          Cookies.set("User", JSON.stringify({ username, gender }), { expires: remember_me ? 12 : 1 })
                          setTimeout(() => {
                            toast.success("Login Success");
                            dispatch(getUser({username:username,password:password,gender:gender}))
                          }, 2000);
                        } else {
                          setTimeout(() => {
                            setSubmitting(false);
                            toast.error("Unauthorized!");
                          }, 2000);
                        }
                        // (async (e) => {
                        //   await axios({
                        //     method: "POST",
                        //     url: `https://coldchain-api.herokuapp.com/api/users/login`,
                        //     data: {
                        //       username: username,
                        //       password: password,
                        //     },
                        //   })
                        //     .then((res) => {
                        //       if (res.statusText === "OK" && res.status === 200) {
                        //         toast.success("Login Success");
                        //         remember_me
                        //           ? Cookies.set(encryptName("getUser"), JSON.stringify(res.data), { expires: 12 })
                        //           : sessionStorage.setItem(encryptName("getUser"), JSON.stringify(res.data));
                        //         history.push("/");
                        //       }
                        //     })
                        //     .catch(() => {
                        //       setSubmitting(false);
                        //       toast.error("Unauthorized!");
                        //       setTimeout(_ => window.location.reload(), 3000);
                        //     });
                        // })();
                      }}
                    >
                      {({
                        values,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        touched,
                        isSubmitting,
                      }) => (
                        <Form onSubmit={handleSubmit} noValidate>
                          <Row>
                            <Col lg="12">
                              <Form.Group className="form-group">
                                <FormLabel htmlFor="username" className="">
                                  Username
                                </FormLabel>
                                <Form.Control
                                  type="text"
                                  id="username"
                                  name="username"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.username}
                                  aria-describedby="username"
                                  isInvalid={
                                    errors.username && touched.username
                                  }
                                  placeholder=" "
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.username && touched.username}
                                </Form.Control.Feedback>
                                <span className="text-danger">{errors.username && errors.username}</span>
                              </Form.Group>
                            </Col>
                            <Col lg="12">
                              <Form.Group className="form-group">
                                <FormLabel htmlFor="password">
                                  Password
                                </FormLabel>
                                <Form.Control
                                  type="password"
                                  id="password"
                                  name="password"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password}
                                  aria-describedby="password"
                                  isInvalid={
                                    errors.password && touched.password
                                  }
                                  placeholder=" "
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.password && touched.password}
                                </Form.Control.Feedback>
                                <span className="text-danger">{errors.password && errors.password}</span>
                              </Form.Group>
                            </Col>
                            <Col
                              lg="12"
                              className="d-flex justify-content-between"
                            >
                              <Form.Check className="form-check mb-3">
                                <Form.Check.Input
                                  type="checkbox"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.remember_me}
                                  name="remember_me"
                                  id="customCheck1"
                                />
                                <Form.Check.Label htmlFor="customCheck1">
                                  Remember Me
                                </Form.Check.Label>
                              </Form.Check>
                              <Form.Check className="form-check mb-3">
                                <Form.Check.Input
                                  type="checkbox"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.gender}
                                  name="gender"
                                  id="customCheck2"
                                />
                                <Form.Check.Label htmlFor="customCheck2">
                                  {values.gender ? "female" : "male"}
                                </Form.Check.Label>
                              </Form.Check>
                            </Col>
                          </Row>
                          <div className="d-flex justify-content-center">
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              variant="primary"
                            >
                              <span>Sign In</span>
                              {isSubmitting && (
                                <Spinner
                                  as="span"
                                  role="status"
                                  style={{ verticalAlign: "sub" }}
                                  className="mx-1"
                                  aria-hidden="true"
                                  size="sm"
                                  animation="border"
                                />
                              )}
                            </Button>
                          </div>
                        </Form>
                      )}
                    </Formik>
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
              src="/assets/images/learn-en-bg.jpg"
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