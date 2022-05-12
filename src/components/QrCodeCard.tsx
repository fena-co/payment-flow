import React from 'react';
import styled from 'styled-components';
import { Button } from '@/components/index';
import qrCodeIcon from '../assets/icons/greenQrCode.svg';
// import bankIcon from '../assets/icons/yellowBank.svg';
import { P } from './Typography';

const CardWrapper = styled.div`
  display: flex;
`;

const QrCodeImg = styled.img`
  height: 200px;
  width: 200px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Items = styled.div`
  margin-top: var(--space-2);
  margin-left: 4rem;
`;

const QrCodeHintItem = styled.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: var(--space-2);
  }
`;

const QrCodeWrapper = styled.div`
  padding: var(--space-1);
  border: 1px solid #dbe3eb;
  border-radius: 10px;
`;

const QrCodeIcon = styled.img`
  margin-right: var(--space-2);
`;

const QrCodeCard: React.FunctionComponent<{
  qrData: string;
  onContinue: () => void;
}> = ({ qrData, onContinue }) => {
  console.log(qrData);
  return (
    <CardWrapper>
      <QrCodeWrapper>
        <QrCodeImg src={qrData} alt="qr code image" />
      </QrCodeWrapper>

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
};

export default QrCodeCard;
