import React, { useEffect } from 'react';
import {
	CButton,
	CCard,
	CCardBody,
	CCardFooter,
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
import { requestUserSignUp } from '../../../behaviours/userLogin/actions';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Register = ({ requestUserSignUp, validationMessage, userInfo, ...props }) => {
	useEffect(() => {
		if (userInfo)
			props.history.push('/login');
	}, [userInfo]);
	return (
		<div className="c-app c-default-layout flex-row align-items-center">
			<CContainer>
				<CRow className="justify-content-center">
					<CCol md="9" lg="7" xl="6">
						<CCard className="mx-4">
							<CCardBody className="p-4">
								<Formik
									initialValues={{
										name: '',
										password: '',
										email: ''
									}}
									onSubmit={async (values) => {
										requestUserSignUp(values.name, values.password, values.email);
									}}
									validationSchema={
										Yup.object().shape({
											name: Yup.string()
												.required('Required'),
											password: Yup.string()
												.required('Required'),
											email: Yup.string().email('email is not valid')
												.required('Required'),
										})
									}
									validateOnChange={false}
									validateOnBlur={false}
								>
									{({ errors }) => (
										<Form>
											<h1>Register</h1>
											<p className="text-muted">Create your account</p>
											<CInputGroup className="mb-3">
												<CInputGroupPrepend>
													<CInputGroupText>
														<CIcon name="cil-user" />
													</CInputGroupText>
												</CInputGroupPrepend>
												<Field id="name" name="name" autoComplete="name" placeholder="name" type="text" className={errors.name ? "form-control is-invalid" : "form-control"} />
												{errors.name ? (
													<div className="invalid-feedback">{errors.name}</div>
												) : null}
											</CInputGroup>
											<CInputGroup className="mb-3">
												<CInputGroupPrepend>
													<CInputGroupText>@</CInputGroupText>
												</CInputGroupPrepend>
												<Field id="email" name="email" autoComplete="email" placeholder="Email" type="text" className={errors.email ? "form-control is-invalid" : "form-control"} />
												{errors.email ? (
													<div className="invalid-feedback">{errors.email}</div>
												) : null}
											</CInputGroup>
											<CInputGroup className="mb-3">
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
											<CInputGroup className="mb-4">
												<CInputGroupPrepend>
													<CInputGroupText>
														<CIcon name="cil-lock-locked" />
													</CInputGroupText>
												</CInputGroupPrepend>
												<CInput type="password" placeholder="Repeat password" autoComplete="new-password" />
											</CInputGroup>
											<button className="btn btn-success btn-block" type="submit">Create Account</button>
										</Form>
									)}
								</Formik>
							</CCardBody>
							<CCardFooter className="p-4">
								<CRow>
									<CCol xs="12" sm="6">
										<CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
									</CCol>
									<CCol xs="12" sm="6">
										<CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
									</CCol>
								</CRow>
							</CCardFooter>
						</CCard>
					</CCol>
				</CRow>
			</CContainer>
		</div>
	);
};
Register.propTypes = {
	requestUserSignUp: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
	validationMessage: state.user.validationMessage,
	userInfo: state.user.information,
});
export default connect(mapStateToProps, { requestUserSignUp })(Register);
