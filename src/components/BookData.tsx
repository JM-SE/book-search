import {
    Container,
    Card,
    CardBody,
    Wrap,
    CardHeader,
    Heading,
    Text,
} from '@chakra-ui/react';

import { Book } from '../types/Book';

const BookData = ({ selectedBook }: { selectedBook: Book }) => {
    const {
        key,
        title,
        author_name,
        first_publish_year,
        publisher,
        edition_count,
        number_of_pages_median,
        language,
    } = selectedBook;

    return (
        <Card key={key} size="lg" variant="filled">
            <CardHeader>
                <Heading size="md">{title}</Heading>
            </CardHeader>
            <CardBody
                padding="0 30px 30px 30px"
                display="flex"
                flexDirection="column"
                gap={2}
            >
                <Container display="flex" alignItems="baseline">
                    <Heading m={0} size="xs">
                        Author:
                    </Heading>
                    <Text m={0} ml={2}>
                        {author_name[0]}
                    </Text>
                </Container>
                <Container display="flex" alignItems="baseline">
                    <Heading m={0} size="xs">
                        First year published:
                    </Heading>
                    <Text m={0} ml={2}>
                        {first_publish_year}
                    </Text>
                </Container>
                <Container display="flex" alignItems="baseline">
                    <Heading m={0} size="xs">
                        Publisher:
                    </Heading>
                    <Text m={0} ml={2}>
                        {publisher[0]}
                    </Text>
                </Container>
                <Container display="flex" alignItems="baseline">
                    <Heading m={0} size="xs">
                        Editions:
                    </Heading>
                    <Text m={0} ml={2}>
                        {edition_count}
                    </Text>
                </Container>
                <Container display="flex" alignItems="baseline">
                    <Heading m={0} size="xs">
                        Number of pages:
                    </Heading>
                    <Text m={0} ml={2}>
                        {number_of_pages_median}
                    </Text>
                </Container>
                <Container display="flex" alignItems="baseline">
                    <Heading m={0} size="xs">
                        Languages:
                    </Heading>
                    <Wrap ml={2}>
                        {language?.map((lang: string, index: number) => (
                            <Text m={0} ml={1} key={lang}>
                                {`${lang}${
                                    index + 1 === language.length ? '.' : ','
                                }`}
                            </Text>
                        )) || (
                            <Text m={0} ml={2}>
                                Unknown
                            </Text>
                        )}
                    </Wrap>
                </Container>
            </CardBody>
        </Card>
    );
};

export default BookData;
