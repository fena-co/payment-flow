import React from 'react';
import styled from 'styled-components';
import qrCodeImage from '../assets/images/qrCode.png';
import qrCodeIcon from '../assets/icons/greenQrCode.svg';
import bankIcon from '../assets/icons/yellowBank.svg';
import { P } from './Typography';

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const QrCodeImg = styled.img``;

const Items = styled.div`
  margin-left: var(--space-3);
`;

const QrCodeHintItem = styled.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: var(--space-2)
  }
`;

const QrCodeIcon = styled.img`
  margin-right: var(--space-2);
`;

const QrCodeCard: React.FunctionComponent = () => {
  return (
    <CardWrapper>
      <QrCodeImg src={qrCodeImage} alt="qr code image" />
      <Items>
        <QrCodeHintItem>
          <QrCodeIcon src={qrCodeIcon} alt="qr code icon" />
          <P>Scan QR Code to open checkout link</P>
        </QrCodeHintItem>
        <QrCodeHintItem>
          <QrCodeIcon src={bankIcon} alt="qr code icon" />
          <P>Select bank to pay with</P>
        </QrCodeHintItem>
      </Items>
    </CardWrapper>
  );
};

export default QrCodeCard;
