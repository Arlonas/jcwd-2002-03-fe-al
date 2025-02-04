
import React, { useState } from "react"
import { Badge, Box, Button, Grid, GridItem, Icon, IconButton, Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Tr, useBreakpointValue } from "@chakra-ui/react"
import { HiPlus, HiMinus, HiShoppingCart, HiOutlineHeart, HiOutlineShare, HiOutlineChat } from "react-icons/hi"
import Slider from "react-slick"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const detail = () => {

    const top = useBreakpointValue({ base: "40%", md: "50%" });
    const side = useBreakpointValue({ base: "10px", md: "10px" });

    const [slider, setSlider] = useState(null);

    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const cards = [
        "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    ];

    const tabelShow = useBreakpointValue({
        base: (
            <Tbody>
                <Tr>
                    <Td>
                        <Text variant="subtitle-bold"> Indikasi/Kegunaan</Text>
                        <Text variant="subtitle"> Indikasi/Kegunaan</Text>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text fontWeight={700} fontSize={16}> Kandungan/Komposisi</Text>
                        <Text fontWeight={400} fontSize={14}> Kandungan/Komposisi</Text>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text fontWeight={700} fontSize={16}> Kemasan</Text>
                        <Text fontWeight={400} fontSize={14}> Kemasan</Text>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text fontWeight={700} fontSize={16}> Golongan</Text>
                        <Text fontWeight={400} fontSize={14}> Golongan</Text>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text fontWeight={700} fontSize={16}> Butuh Resep</Text>
                        <Text fontWeight={400} fontSize={14}> Butuh Resep</Text>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text fontWeight={700} fontSize={16}> Cara Penyimpanan</Text>
                        <Text fontWeight={400} fontSize={14}> Cara Penyimpanan</Text>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text fontWeight={700} fontSize={16}> Principal</Text>
                        <Text fontWeight={400} fontSize={14}> Principal</Text>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text fontWeight={700} fontSize={16}> Nomer Ijin Edar (NIE)</Text>
                        <Text fontWeight={400} fontSize={14}> Nomer Ijin Edar (NIE)</Text>
                    </Td>
                </Tr>
            </Tbody>

        ),
        md: (
            <Tbody>
                <Tr>
                    <Td>Indikasi/Kegunaan</Td>
                    <Td>Indikasi/Kegunaan</Td>
                </Tr>
                <Tr>
                    <Td>Kandungan/Komposisi</Td>
                    <Td>Kandungan/Komposisi</Td>
                </Tr>
                <Tr>
                    <Td>Kemasan</Td>
                    <Td>Kemasan</Td>
                </Tr>
                <Tr>
                    <Td>Golongan</Td>
                    <Td>Golongan</Td>
                </Tr>
                <Tr>
                    <Td>Butuh Resep</Td>
                    <Td>Butuh Resep</Td>
                </Tr>
                <Tr>
                    <Td>Cara Penyimpanan</Td>
                    <Td>Cara Penyimpanan</Td>
                </Tr>
                <Tr>
                    <Td>Proncipal</Td>
                    <Td>Proncipal</Td>
                </Tr>
                <Tr>
                    <Td>Nomer Ijin Edar (NIE)</Td>
                    <Td>Nomer Ijin Edar (NIE)</Td>
                </Tr>
            </Tbody>
        )
    })

    return (
        <Grid
            templateColumns={["repeat(1, 1fr)", "repeat(5, 1fr)", "repeat(5, 1fr)"]}
            gap={[2, 2, 2]}
            alignContent="center"
            w={["100%", "90", "90%"]}
            marginLeft="auto"
            marginRight="auto"
        // mb={[10, 8, 8]}
        >
            <GridItem
                colSpan={[1, 2, 2]}
                padding={[2, 6, 6]}
                alignItems="center"
                justifyContent="center"
                display="flex-Box"

            >
                <Box
                    boxShadow={["none", "base", "base"]}
                    width="100%"
                    padding={[2, 6, 6]}
                    borderRadius="16px"
                >

                    <Box
                        position="relative"
                        height={[250, 300, 300]}
                        width={[300, 405, 405]}
                        maxW="100%"
                        overflow="hidden"
                        alignItems="center"
                        justifyContent="center"
                        marginRight="auto"
                        marginLeft="auto"

                    >
                        {/* CSS files for react-slick */}
                        <link
                            rel="stylesheet"
                            type="text/css"
                            charSet="UTF-8"
                            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                        />
                        <link
                            rel="stylesheet"
                            type="text/css"
                            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                        />
                        {/* Left Icon */}
                        <IconButton
                            aria-label="left-arrow"
                            colorScheme="messenger"
                            borderRadius="full"
                            position="absolute"
                            left={side}
                            top={top}
                            transform="translate(0%, -50%)"
                            zIndex={2}
                            onClick={() => slider?.slickPrev()}
                            display={["none", "flex"]}
                        >
                            <BiLeftArrowAlt />
                        </IconButton>
                        {/* Right Icon */}
                        <IconButton
                            aria-label="right-arrow"
                            colorScheme="messenger"
                            borderRadius="full"
                            position="absolute"
                            right={side}
                            top={top}
                            transform="translate(0%, -60%)"
                            zIndex={2}
                            onClick={() => slider?.slickNext()}
                            display={["none", "flex"]}
                        >
                            <BiRightArrowAlt />
                        </IconButton>
                        {/* Slider */}
                        <Slider {...settings} ref={() => setSlider(slider)}>
                            {cards.map((url) => (
                                <Box
                                    key={url}
                                    height={[180, 250, 250]}
                                    width={["full", 405, 405]}
                                    position="relative"
                                    backgroundPosition="center"
                                    backgroundRepeat="no-repeat"
                                    backgroundSize="cover"
                                    backgroundImage={`url(${url})`}
                                />
                            ))}
                        </Slider>
                    </Box>
                    <Box mt={2} display={["none", "flex", "flex"]}>
                        <Button width="145px" height="46px" variant="main" mr={5} borderRadius="130px" alignItems="center"  >
                            <Icon mr={2} as={HiOutlineChat} />
                            Chat Admin
                        </Button>
                        <Button width="145px" height="46px" variant="main" borderRadius="130px" alignItems="center" >
                            <Icon mr={2} as={HiOutlineShare} />
                            Bagikan
                        </Button>
                    </Box>

                </Box>
            </GridItem>
            <GridItem hight={["auto", "auto", "auto"]} padding={[2, 6, 6]} colSpan={[1, 3, 3]} >
                <Box
                    // boxShadow={["none", "dark-lg", "dark-lg"]}
                    padding={[2, 6, 6]}
                    borderRadius="16px"
                    margin={[2, 4, 4]}
                >

                    <Box>
                        <Text variant='mini-title'>Bisolvon</Text>
                        <Text variant="caption-ligth">Bisolvon 8MG 4 Tablet</Text>
                        <Box display="flex" alignItems='center'>
                            <Text variant="title">Rp. 13.000</Text> &nbsp;
                            <Text variant="caption"> / per strip(4 tablet)</Text>
                        </Box>
                        <Box mt={3} display="flex" alignItems='center'>
                            <Text as='s' variant="caption">Rp.17.000</Text>
                            <Badge ml={2}>17%</Badge>
                        </Box>
                    </Box>
                    <Box alignItems="center" display="flex" mt={5}>
                        <Box display="flex" alignItems="center" justifyContent="space-between" width={["138px", "164px"]} height={["36px", "38px"]}>
                            <IconButton>
                                <Icon as={HiMinus} />
                            </IconButton>
                            <Box variant="main" textAlign="center">1</Box>
                            <IconButton>
                                <Icon as={HiPlus} />
                            </IconButton>
                        </Box>
                        <Text variant="caption-bold" ml={5}> Sisa 20 Strips</Text>
                    </Box>
                    {/* <Box marginTop={5}> */}
                    <Box display={["none", "flex", "flex"]} alignItems="center" mt={5} >
                        <Button width="194px" height="48px" variant="main">
                            <Icon mr={2} as={HiShoppingCart} />
                            keranjang
                        </Button >
                        <Button width="153px" height="48px" variant="main" ml={5}>
                            Beli
                        </Button>
                        <IconButton variant="outline" ml={5}>
                            <Icon size="49px" as={HiOutlineHeart} />
                        </IconButton>
                    </Box>
                    {/* </Box> */}
                </Box>
                <Box
                    // boxShadow={["none", "dark-lg", "dark-lg"]}
                    padding={[2, 6, 6]}
                    borderRadius="16px"
                    margin={[2, 4, 4]}
                >
                    <Tabs
                        align='center'
                        // variant="enclosed"
                        isFitted
                        isLazy
                    >
                        <TabList>
                            <Tab _focus={{ borderBottomColor: "teal", outline: 0 }}>Deskripsi</Tab>
                            <Tab _focus={{ borderBottomColor: "teal", outline: 0 }}>Cara Pakai</Tab>
                            <Tab _focus={{ borderBottomColor: "teal", outline: 0 }}>Peringatan</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <TableContainer>
                                    <Table variant='simple'>
                                        {tabelShow}
                                    </Table>
                                </TableContainer>
                            </TabPanel>
                            <TabPanel>Cara Pakai</TabPanel>
                            <TabPanel>Peringatan</TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </GridItem>


        </Grid >
    )
}

export default detail