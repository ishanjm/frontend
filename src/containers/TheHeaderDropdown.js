import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {
	CBadge,
	CDropdown,
	CDropdownItem,
	CDropdownMenu,
	CDropdownToggle,
	CImg
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { connect } from 'react-redux';
import { requestUserLogOut } from '../behaviours/userLogin/actions';
import PropTypes from 'prop-types';

const TheHeaderDropdown = ({ username, requestUserLogOut }) => {
	let history = useHistory();
	useEffect(() => {
		if (!username) {
			history.push('/login');
			localStorage.removeItem("userInfo");
		}
	}, [username]);
	return (
		<CDropdown
			inNav
			className="c-header-nav-items mx-2"
			direction="down"
		>
			<CDropdownToggle className="c-header-nav-link" caret={false}>
				<div className="c-avatar">
					<CImg
						src={'avatars/6.jpg'}
						className="c-avatar-img"
						alt="admin@bootstrapmaster.com"
					/>
				</div>
			</CDropdownToggle>
			<CDropdownMenu className="pt-0" placement="bottom-end">
				<CDropdownItem
					header
					tag="div"
					color="light"
					className="text-center"
				>
					<strong>{username}</strong>
				</CDropdownItem>
				<CDropdownItem>
					<CIcon name="cil-bell" className="mfe-2" />
					Updates
					<CBadge color="info" className="mfs-auto">42</CBadge>
				</CDropdownItem>
				<CDropdownItem>
					<CIcon name="cil-envelope-open" className="mfe-2" />
					Messages
					<CBadge color="success" className="mfs-auto">42</CBadge>
				</CDropdownItem>
				<CDropdownItem>
					<CIcon name="cil-task" className="mfe-2" />
					Tasks
					<CBadge color="danger" className="mfs-auto">42</CBadge>
				</CDropdownItem>
				<CDropdownItem>
					<CIcon name="cil-comment-square" className="mfe-2" />
					Comments
					<CBadge color="warning" className="mfs-auto">42</CBadge>
				</CDropdownItem>
				<CDropdownItem
					header
					tag="div"
					color="light"
					className="text-center"
				>
					<strong>Settings</strong>
				</CDropdownItem>
				<CDropdownItem>
					<CIcon name="cil-user" className="mfe-2" />Profile
				</CDropdownItem>
				<CDropdownItem>
					<CIcon name="cil-settings" className="mfe-2" />
					Settings
				</CDropdownItem>
				<CDropdownItem>
					<CIcon name="cil-credit-card" className="mfe-2" />
					Payments
					<CBadge color="secondary" className="mfs-auto">42</CBadge>
				</CDropdownItem>
				<CDropdownItem>
					<CIcon name="cil-file" className="mfe-2" />
					Projects
					<CBadge color="primary" className="mfs-auto">42</CBadge>
				</CDropdownItem>
				<CDropdownItem divider />
				<CDropdownItem onClick={() => requestUserLogOut()}>
					<CIcon name="cil-lock-locked" className="mfe-2" />
					Logout
				</CDropdownItem>
			</CDropdownMenu>
		</CDropdown>
	);
};
TheHeaderDropdown.propTypes = {
	requestUserLogOut: PropTypes.func.isRequired,
	username: PropTypes.string,
};
const mapStateToProps = state => ({
	username: state.user.userInfo && state.user.userInfo.name ? state.user.userInfo.name : ''
});
export default connect(mapStateToProps, { requestUserLogOut })(TheHeaderDropdown);
