import React, { Component } from "react";
import Navbar from "./../Navbar";
import Grid from "@material-ui/core/Grid";
import { Fade, Slide } from "react-reveal";
import logo from "./../../../image/sidoarjo.png";
import { Container } from "@material-ui/core";
import nelayan from "./../../../image/nelayan.jpg";
class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                {/* <Container> */}
                {/* sejarah */}
                <Grid
                    container
                    justify="center"
                    spacing={3}
                    className="bg-success"
                    style={{ paddingTop: 75 }}
                >
                    <Grid item md={4} sm={0} xs={0}>
                        <Fade left>
                            <center>
                                <img src={logo} style={{ width: "80%" }} />
                            </center>
                        </Fade>
                        {/* <hr />
                        <center>
                            <h4>Sidoarjo Bersih Hatinya</h4>
                            <h5>Sejak 31 Januari 1859</h5>
                        </center> */}
                    </Grid>
                    <Grid
                        item
                        md={7}
                        sm={12}
                        xs={12}
                        style={{
                            backgroundColor: "#FFF8DC	",
                            borderRadius: 20,
                            margin: 30,
                        }}
                    >
                        <Slide bottom>
                            <h2>Sejarah</h2>
                            <p>
                                Sidoarjo dulu dikenal sebagai pusat Kerajaan
                                Janggala. Pada masa kolonialisme Hindia Belanda,
                                daerah Sidoarjo bernama Sidokare, yang merupakan
                                bagian dari Kabupaten Surabaya. Daerah Sidokare
                                dipimpin oleh seorang patih bernama R. Ng.
                                Djojohardjo, bertempat tinggal di kampung Pucang
                                Anom yang dibantu oleh seorang wedana yaitu
                                Bagus Ranuwiryo yang berdiam di kampung
                                Pangabahan. Pada 1859, berdasarkan Keputusan
                                Pemerintah Hindia Belanda No. 9/1859 tanggal 31
                                Januari 1859 Staatsblad No. 6, daerah Kabupaten
                                Surabaya dibagi menjadi dua bagian yaitu
                                Kabupaten Surabaya dan Kabupaten Sidokare.
                            </p>
                            <p>
                                Pada November 1948, dibentuklah Negara Jawa
                                Timur salah satu negara bagian dalam Republik
                                Indonesia Serikat. Sidoarjo berada di bawah
                                pemerintahan Recomba hingga tahun 1949. Tanggal
                                27 Desember 1949, sebagai hasil kesepakatan
                                Konferensi Meja Bundar, Belanda menyerahkan
                                kembali Negara Jawa Timur kepada Republik
                                Indonesia, sehingga daerah delta Brantas dengan
                                sendirinya menjadi daerah Republik Indonesia.
                            </p>
                        </Slide>
                    </Grid>
                </Grid>
                <hr />
                {/* profil masyarakat */}
                <h3 style={{ textAlign: "center" }}>Profil Masyarakat</h3>
                <Grid container justify="center" style={{ padding: 25 }}>
                    <Grid item md={6} sm={12} xs={12} style={{ padding: 5 }}>
                        <div
                            style={{
                                padding: 10,
                                borderRadius: 15,
                                borderColor: "green",
                                borderWidth: 1,
                            }}
                        >
                            Kabupaten Sidoarjo merupakan Dataran Delta dengan
                            ketinggian antar 0 s/d 25 m, ketinggian 0-3m dengan
                            luas 19.006 Ha, meliputi 29,99%, merupakan daerah
                            pertambakkan yang berada di wilayah bagian timur
                            Wilayah Bagian Tengah yang berair tawar dengan
                            ketinggian 3-10 meter dari permukaan laut merupakan
                            daerah pemukiman, perdagangan dan pemerintahan.
                            Meliputi 40,81 %. Wilayah Bagian Barat dengan
                            ketinggian 10-25 meter dari permukaan laut merupakan
                            daerah pertanian.
                        </div>

                        <div
                            style={{
                                padding: 10,
                                borderRadius: 15,
                                borderColor: "green",
                                borderWidth: 1,
                                marginTop: 10,
                            }}
                        >
                            <p>
                                Kecamatan yang paling padat dihuni penduduk
                                adalah Waru, Taman, Sidoarjo, Candi, Krian,
                                Gedangan, Sukodono, Sedati, Tanggulangin,
                                Buduran, Tulangan, Porong, Wonoayu, Prambon,
                                Balongbendo, Krembung dan Tarik. Pertambahan
                                penduduk di Kabupaten Sidoarjo, bukan
                                dikarenakan tingginya angka kelahiran, akan
                                tetapi lebih dikarenakan arus urbanisasi sebagai
                                dampak dari pertumbuhan sektor industri dan
                                perumahan di Sidoarjo serta sekaligus sebagai
                                daerah penyangga Kota Surabaya.
                            </p>
                            <p>
                                Indeks Pembangunan Manusia Metode Baru Dan
                                Komponennya Di Kabupaten Sidoarjo Tahun 2018
                                sebagai berikut : Angka Harapan Hidup mencapai
                                73,63, Harapan lama Sekolah mencapai 13,89,
                                Rata-rata Lama Sekolah mencapai 10,12,
                                Pengeluaran Perkapita Disesuaikan sebesar Rp
                                12.879.{" "}
                            </p>
                        </div>
                        <div
                            style={{
                                padding: 10,
                                borderRadius: 15,
                                borderColor: "green",
                                borderWidth: 1,
                                marginTop: 10,
                            }}
                        >
                            Kabupaten Sidoarjo merupakan daerah pertanian yang
                            subur sebagai lumbung pangan, mempertahankan
                            petanian yang maju agar bisa swasembada pangan
                            dengan cara intensifikasi pertanian dan menggunakan
                            mekanisasi teknologi tepat guna.Industri menjadi
                            faktor penting sebagai perwujudan kesejahteraan,
                            maka kedua hal itu harus berkembang secara serasi.
                            Selain itu, masyarakat Kabupaten Sidoarjo berbudaya
                            hidup dengan lingkungan yang bersih, rapi, serasi,
                            hijau, sehat, indah dan nyaman.
                        </div>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} style={{ padding: 5 }}>
                        <div
                            style={{
                                padding: 10,
                                borderRadius: 15,
                                borderColor: "green",
                                borderWidth: 1,
                            }}
                        >
                            Penduduk adalah faktor penting dalam membangun suatu
                            pemerintahan dan pembangunan. Sebab selain menjadi
                            obyek pembangunan penduduk sekaligus menjadi pelaku
                            pembangunan. Jumlah Penduduk di Kabupaten Sidoarjo
                            tahun 2019 hasil proyeksi penduduk mencapai
                            2.262.440 dengan komposisi jumlah penduduk laki-laki
                            1.140.627 jiwa dan penduduk perempuan berjumlah
                            1.121.813 jiwa.
                        </div>
                        <Fade bottom>
                            <img
                                src={nelayan}
                                style={{
                                    width: "80%",
                                    borderRadius: 20,
                                    margin: 25,
                                }}
                            />
                        </Fade>
                    </Grid>
                </Grid>
                {/* </Container> */}
            </div>
        );
    }
}

export default About;
