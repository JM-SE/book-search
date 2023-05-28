import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    AlertStatus,
} from '@chakra-ui/react';

interface IAlertMessageProps {
    status: AlertStatus;
    title: string;
    description: string;
}

const AlertMessage = ({ status, title, description }: IAlertMessageProps) => (
    <Alert status={status}>
        <AlertIcon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
    </Alert>
);

export default AlertMessage;
