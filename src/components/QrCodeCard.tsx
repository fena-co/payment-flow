import React from 'react';
import styled from 'styled-components';
import { Button } from '@/components/index';
import qrCodeIcon from '../assets/icons/greenQrCode.svg';
// import bankIcon from '../assets/icons/yellowBank.svg';
import { P } from './Typography';

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const QrCodeImg = styled.img`
  height: 300px;
  width: 300px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
`;

const Items = styled.div`
  margin-left: var(--space-3);
`;

const QrCodeHintItem = styled.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: var(--space-2);
  }
`;

const QrCodeIcon = styled.img`
  margin-right: var(--space-2);
`;

const QrCodeCard: React.FunctionComponent<{
  qrData: string;
  onContinue: () => void;
}> = ({ qrData, onContinue }) => (
  <CardWrapper>
    <QrCodeImg src={qrData} alt="qr code image" />
    <Items>
      <QrCodeHintItem>
        <QrCodeIcon src={qrCodeIcon} alt="qr code icon" />
        <P>Scan QR Code to open checkout link</P>
      </QrCodeHintItem>
      <QrCodeHintItem>
        <ButtonWrapper>
          <Button onClick={onContinue}>Continue on desktop</Button>
        </ButtonWrapper>
      </QrCodeHintItem>
    </Items>
  </CardWrapper>
);

export default QrCodeCard;
