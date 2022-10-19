import {

	CCol,
	CRow,
	CWidgetIcon,
	CLink
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

const Settings = () => {
	return (
		<CRow>
			<CCol xs="12" sm="6" lg="3">
				<CLink to="/users">
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