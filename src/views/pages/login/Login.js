import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { requestUserLogin } from '../../../behaviours/userLogin/actions';
import PropTypes from 'prop-types';

const Login = ({ requestUserLogin, validationMessage, userInfo, ...props }) => {
	const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
	useEffect(() => {
		if (userInfo && localStorage.getItem('userInfo'))
			props.history.push(redirect);
	}, [userInfo]);
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
											email: '',
											password: '',
										}}
										onSubmit={async (values) => {
											requestUserLogin(values.email, values.password);
										}}
										validationSchema={
											Yup.object().shape({
												email: Yup.string().email('email is not valid')
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
												{validationMessage && <div className="alert alert-danger fade show" role="alert">{validationMessage}</div>}
												<CInputGroup className="mb-3">
													<CInputGroupPrepend>
														<CInputGroupText>
															<CIcon name="cil-user" />
														</CInputGroupText>
													</CInputGroupPrepend>
													<Field id="email" name="email" autoComplete="email" placeholder="email" type="text" className={errors.email ? "form-control is-invalid" : "form-control"} />
													{errors.email ? (
														<div className="invalid-feedback">{errors.email}</div>
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
	);
};
Login.propTypes = {
	requestUserLogin: PropTypes.func.isRequired,
	validationMessage: PropTypes.string,
	userInfo: PropTypes.object
};
const mapStateToProps = state => ({
	validationMessage: state.user.validationMessage,
	userInfo: state.user.userInfo,
});
export default connect(mapStateToProps, { requestUserLogin })(Login);
