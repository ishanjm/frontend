import React from 'react'
import { Link } from 'react-router-dom'
import {
	CButton,
	CCard,
	CCardBody,
	CCardGroup,
	CCol,
	CContainer,
	CForm,
	CInput,
	CInputGroup,
	CInputGroupPrepend,
	CInputGroupText,
	CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const Login = () => {
	return (
		<div className="c-app c-default-layout flex-row align-items-center">
			<CContainer>
				<CRow className="justify-content-center">
					<CCol md="8">
						<CCardGroup>
							<CCard className="p-4">
								<CCardBody>
									<Formik
										initialValues={{
											Username: '',
											password: '',
										}}
										onSubmit={async (values) => {
											await new Promise((r) => setTimeout(r, 500));
											alert(JSON.stringify(values, null, 2));
										}}
										validationSchema={
											Yup.object().shape({
												Username: Yup.string()
													.required('Required'),
												password: Yup.string()
													.required('Required'),
											})
										}
										validateOnChange={false}
										validateOnBlur={false}
									>
										{({ errors }) => (
											<Form>
												<h1>Login</h1>
												<p className="text-muted">Sign In to your account</p>
												<CInputGroup className="mb-3">
													<CInputGroupPrepend>
														<CInputGroupText>
															<CIcon name="cil-user" />
														</CInputGroupText>
													</CInputGroupPrepend>
													<Field id="Username" name="Username" autoComplete="username" placeholder="username" type="text" className={errors.Username ? "form-control is-invalid" : "form-control"} />
													{errors.Username ? (
														<div className="invalid-feedback">{errors.Username}</div>
													) : null}
												</CInputGroup>
												<CInputGroup className="mb-4">
													<CInputGroupPrepend>
														<CInputGroupText>
															<CIcon name="cil-lock-locked" />
														</CInputGroupText>
													</CInputGroupPrepend>
													<Field id="password" name="password" autoComplete="current-password" placeholder="password" type="password" className={errors.password ? "form-control is-invalid" : "form-control"} />
													{errors.password ? (
														<div className="invalid-feedback">{errors.password}</div>
													) : null}
												</CInputGroup>
												<CRow>
													<CCol xs="6">
														<button className="px-4 btn btn-primary" type="submit">Submit</button>
													</CCol>
													<CCol xs="6" className="text-right">
														<CButton color="link" className="px-0">Forgot password?</CButton>
													</CCol>
												</CRow>
											</Form>
										)}
									</Formik>
								</CCardBody>
							</CCard>
							<CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
								<CCardBody className="text-center">
									<div>
										<h2>Sign up</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
											labore et dolore magna aliqua.</p>
										<Link to="/register">
											<CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
										</Link>
									</div>
								</CCardBody>
							</CCard>
						</CCardGroup>
					</CCol>
				</CRow>
			</CContainer>
		</div>
	)
}

export default Login
