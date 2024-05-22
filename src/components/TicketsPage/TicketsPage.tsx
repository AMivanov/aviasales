import { ConfigProvider, Flex, Radio, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import TicketsList from '../TicketsList';
import * as ticketsActions from '../../redux/actions/localActions';
import { RootState } from '../../redux/store/store';

import * as Styles from './TicketsPage.styles'
import { handleRadioChangeFunc } from './TicketsPage.utils';

export default function TicketsPage() {
    const dispatch = useDispatch()
    const selectedOption = useSelector((state: RootState) => state.localReducer.selectedOption)

    const handleRadioChange = handleRadioChangeFunc(dispatch)

    return (
    <Styles.Page>
        <ConfigProvider
          theme={{
                token: {
                    padding: 42,
                    fontSize: 9,
                },
            }}
        >
            <Flex vertical gap="middle">
                <Radio.Group
                  defaultValue="cheap"
                  buttonStyle="solid"
                  size="large"
                  value={selectedOption}
                  onChange={handleRadioChange}
                >
                    <Radio.Button value="cheap">САМЫЙ ДЕШЕВЫЙ</Radio.Button>
                    <Radio.Button value="fast">САМЫЙ БЫСТРЫЙ</Radio.Button>
                    <Radio.Button value="optimal">ОПТИМАЛЬНЫЙ</Radio.Button>
                </Radio.Group>
            </Flex>
        </ConfigProvider>
        <TicketsList />
        <ConfigProvider
          theme={{
                token: {
                    fontSize: 9,
                    sizeMS: 187,
                },
            }}
        >
            <Button
              type="primary"
              size="large"
              onClick={() => dispatch(ticketsActions.showMore())}
            >
                ПОКАЗАТЬ ЕШЕ 5 БИЛЕТОВ!
            </Button>
        </ConfigProvider>
    </Styles.Page>
  );
}
