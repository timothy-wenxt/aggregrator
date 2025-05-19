import React, { useEffect, useState } from 'react'
import SelectPolicy from './SelectPolicy'
import ReviewBlock from './ReviewBlock'
import { CalendarDays } from 'lucide-react'
import AITareqButton from '../../../components/AITareqButton/AITareqButton'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { setStepperIndex } from '../../../globalStore/slices/stepperSlice'
import useApiRequests from '../../../services/useApiRequests'
import showNotification from '../../../components/notification/Notification'
import JSONModal from './JSONModal'
import Loader from '../../../components/loader/Loader'
import { setPolDetails } from '../../../globalStore/slices/polDetailsSlice'

const Stepper2 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const polDetailsJSON = useApiRequests('polDetailsJSON', 'GET');
    const polListNew = useApiRequests('polListMain', 'GET');
    const consentList = useApiRequests('consentList', 'GET');
    const formattedDate = moment().format('DD/MM/YYYY');
    const polDetails = useSelector((state) => state?.polDetails?.policyDetails);
    const [polData, setPolData] = useState([]);
    const [concentData, setConcentData] = useState(null);
    const [selectedPolicy, setSelectedPolicy] = useState(null);
    const [jsonModal, setJsonModal] = useState(false);
    const [JSONData, setJSONData] = useState(null)
    const [loader, setLoader] = useState(false)

    const handleGetPolListNew = async () => {
        setLoader(true)
        try {
            const response = await polListNew('', { POL_CUST_CODE: polDetails?.customerId });
            if (response?.meta?.type === 'success') {
                setPolData(response?.data)
            } else {
                showNotification.ERROR(response?.meta?.message);
            }
        } catch (err) {
            showNotification.ERROR(err);
        } finally {
            setLoader(false)
        }
    };

    const handleGetConsentData = async () => {
        try {
            const response = await consentList('', {}, {
                id: polDetails?.policyIds[0],
            });
            const temp = response?.data?.consentBody?.Data?.Permissions
            const permissionObject = Object.fromEntries(temp.map(key => [key, true]));
            setConcentData(permissionObject)
        } catch (err) {
            showNotification.ERROR(err);
        }
    };

    const handleSubmit = async () => {
        setLoader(true)
        if (!selectedPolicy) {
            setLoader(false)
            showNotification.WARNING("Please select a policy");
            return;
        }
        try {
            const response = await polDetailsJSON('', { pol_no: selectedPolicy });
            setJSONData(response)
            setJsonModal(true)
        } catch (err) {
            showNotification.ERROR(err);
        } finally {
            setLoader(false)
        }
    };

    useEffect(() => {
        handleGetConsentData()
        handleGetPolListNew()
    }, [])

    const handleClose = () => {
        setJsonModal(false)
        if (JSONData?.meta?.type === 'success') {
            dispatch(setStepperIndex(1))
            dispatch(setPolDetails(null))
            navigate('/login')
        }
    }

    return (
        <>
            {loader && <Loader />}
            <div className='select_policy'>
                {polData?.length > 0 &&
                    <SelectPolicy
                        polData={polData}
                        selectedPolicy={selectedPolicy}
                        setSelectedPolicy={setSelectedPolicy}
                    />
                }
            </div>
            <div className='select_policy'>
                {concentData !== null &&
                    <ReviewBlock concentData={concentData} />
                }
            </div>
            <div className='date_block'>
                <div className='flex items-center'>
                    <CalendarDays className='icon_style' />
                    <p className='text-style'>You are sharing your data only for today</p>
                </div>
                <p className="text-style-sub">{formattedDate}</p>
            </div>
            <div className='btn_container_s2'>
                <div className='main-btns'>
                    {/* <CancelButton onClick={() => dispatch(setStepperIndex(0))} /> */}
                    <AITareqButton onClick={() => {
                        handleSubmit()
                        // dispatch(setStepperIndex(1))
                        // navigate('/login')
                    }} />
                </div>
                <p className='footer_text'>Continue to
                    <span> {polDetails?.companyName} </span>
                    to share your insurance policy information under these terms</p>
            </div>
            {jsonModal &&
                <JSONModal
                    open={jsonModal}
                    handleClose={handleClose}
                    JSONData={JSONData}
                />
            }
        </>
    )
}

export default Stepper2