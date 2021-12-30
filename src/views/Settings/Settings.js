import {

	CCol,
	CRow,
	CWidgetIcon,
	CLink
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { link } from 'react-router-dom';

const Settings = () => {
	return (
		<CRow>
			<CCol xs="12" sm="6" lg="3">
				<CLink
					className="c-subheader-nav-link"
					aria-current="page"
					to="/users"
				>
					<CWidgetIcon text="Users" color="primary">
						<CIcon width={24} name="cil-user" />
					</CWidgetIcon>
				</CLink>

			</CCol>
			<CCol xs="12" sm="6" lg="3">
				<CWidgetIcon text="Roles" color="primary">
					<CIcon width={24} name="cil-people" />
				</CWidgetIcon>
			</CCol>
		</CRow>
	);
};
export default Settings;