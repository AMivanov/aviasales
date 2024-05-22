import { Checkbox, ConfigProvider } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../redux/store/store';

import * as Styles from './TransfersFilter.styles'
import * as Constants from './TransfersFilter.constants'
import { handleCheckboxChanges } from './TransferFilter.utils';

export default function TransfersFilter () {
    const dispatch = useDispatch();
    const checkedList = useSelector((state: RootState) => state.localReducer.checkboxValues);

    const checkAll = Constants.plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < Constants.plainOptions.length;

    const { onChange, onCheckAllChange } = handleCheckboxChanges(dispatch)

    return (
        <Styles.Settings>
            КОЛИЧЕСТВО ПЕРЕСАДОК
            <ConfigProvider
              theme={{
                    token: {
                        lineHeight: 3,
                        fontSize: 12,
                    },
                }}
            >
                <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                    Все
                </Checkbox>
                <Constants.CheckboxGroup
                  options={Constants.plainOptions}
                  value={checkedList}
                  onChange={onChange}
                />
            </ConfigProvider>
        </Styles.Settings>
    )
}