/**
 * Created by hautruong on 6/30/18.
 */
import React, { Component } from 'react';

class SongPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="__song_page">
        <div>
          <div className="song-header">
            <div className="song-header-info">
              <div className="song-header-song-title">Đừng Quên Tên Anh</div>
              <div className="song-header-song-artist">
                <a className="ellipsis" href="/artist/Hoa-Vinh" />
              </div>
            </div>
            <div className="song-header-actions">
              <button className="sc-ir" title="Dowload the song">
                <i className="ion-ios-download-outline" />
              </button>
              <button className="sc-ir" title="Add this song to your playlists">
                <i className="ion-ios-plus-empty" />
              </button>
            </div>
          </div>
          <div
            className="bgImageContainer karaoke karaoke-song-page"
            src="https://zmp3-photo.zadn.vn/cover_artist/4/f/9/c/4f9c18535a3963c788452ab721b68f8c.jpg"
            style={{
              opacity: 1,
              backgroundImage: `url(&quot;https://zmp3-photo.zadn.vn/cover_artist/4/f/9/c/4f9c18535a3963c788452ab721b68f8c.jpg&quot;);`
            }}
          >
            <div />
            <div className="karaokeWrapper">
              <div style={{ position: `relative`, display: `inline-block` }}>
                <div
                  style={{
                    whiteSpace: `nowrap`,
                    fontSize: `25px`,
                    color: `white`,
                    textShadow: `rgb(8, 13, 22) -1px 0px, rgb(8, 13, 22) 0px 1px`
                  }}
                >
                  Còn hồn em bay
                </div>
                <div
                  style={{
                    whiteSpace: `nowrap`,
                    fontSize: `25px`,
                    color: `skyblue`,
                    textShadow: `rgb(8, 13, 22) -1px 0px, rgb(8, 13, 22) 0px 1px; position: absolute; left: 0px; top: 0px`,
                    overflow: `hidden`,
                    zIndex: 1,
                    width: `33%`
                  }}
                >
                  Còn hồn em bay
                </div>
              </div>
              <br />
              <br />
              <div style={{ position: `relative`, display: `inline-block` }}>
                <div
                  style={{
                    whiteSpace: `nowrap`,
                    fontSize: `25px`,
                    color: `white`,
                    textShadow: `rgb(8, 13, 22) -1px 0px, rgb(8, 13, 22) 0px 1px`
                  }}
                >
                  Thế giới bé thôi
                </div>
                <div
                  style={{
                    whiteSpace: `nowrap`,
                    fontSize: `25px`,
                    color: `skyblue`,
                    textShadow: `rgb(8, 13, 22) -1px 0px, rgb(8, 13, 22) 0px 1px; position: absolute; left: 0px; top: 0px`,
                    overflow: `hidden`,
                    zIndex: 1,
                    width: `33%`
                  }}
                >
                  Thế giới bé thôi
                </div>
              </div>
            </div>
          </div>
          <div className="song-body">
            <div className="suggested-section">
              <div className="suggested-section-heading">
                <span>Suggested</span>
              </div>
              <div className="suggested-section-body suggested-left">
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/9/b/4/0/9b40a25f9a606520333fa79f1fdf5ea6.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Cham-Day-Noi-Dau/ZW9BCU0D"
                    >
                      Chạm Đáy Nỗi Đau
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/ERIK">ERIK</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/1/d/a/d/1daddef5ca951ee3c8a564b032e59af5.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Yeu-Nhu-Cach-Em-Tung/ZW9C8EW0"
                    >
                      Yêu Như Cách Em Từng
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/Yen-Trang">Yến Trang</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/3/e/8/d/3e8d9f9afb626537a2b3ba12c6d04c2d.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Goi-Ten-Em-Trong-Dem-Cover/ZW9BDCCA"
                    >
                      Gọi Tên Em Trong Đêm (Cover)
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/Hoa-Vinh">Hoa Vinh</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/9/7/5/7/9757a70a3932be1bfbba5695e120a4c1.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Nguoi-Am-Phu/ZW9BB9F7"
                    >
                      Người Âm Phủ
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/OSAD">OSAD</a>
                      <a href="/artist/VRT"> VRT</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/covers/f/f/ff44d05771e686143a49b6a73dd844bb_1519265212.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Co-Gai-M52/ZW9BID0A"
                    >
                      Cô Gái M52
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/HuyR">HuyR</a>
                      <a href="/artist/Tùng Viu"> Tùng Viu</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/e/6/6/0/e660a6c3fecea2c01da298e42c9c03aa.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Minh-Cung-Nhau-Dong-Bang/ZW9CUD60"
                    >
                      Mình Cùng Nhau Đóng Băng
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/Thuy-Chi">Thùy Chi</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/covers/0/8/08193d6fe58d511c3cf519a0cc856c91_1517889125.png"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Hom-Nay-Toi-Buon/ZW9AFD7C"
                    >
                      Hôm Nay Tôi Buồn
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/Phung-Khanh-Linh">Phùng Khánh Linh</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/covers/d/a/dad9377f8bda530f6b23f3f69ff385ed_1514879756.gif"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Sai-Nguoi-Sai-Thoi-Diem/ZW9A7CEE"
                    >
                      Sai Người Sai Thời Điểm
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/Thanh-Hung-Idol">Thanh Hưng</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/2/6/4/7/2647844cdbd9360beb32a6ca7da1ab7e.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Roi-Bo/ZW9C0DOU"
                    >
                      Rời Bỏ
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/Hoa-Minzy">Hòa Minzy</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/1/0/0/d/100d8cf74e66b8df7edc56884591339e.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Tat-Ca-Se-Thay-Em/ZW9C7FC8"
                    >
                      Tất Cả Sẽ Thay Em
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/Pham-Quynh-Anh">Phạm Quỳnh Anh</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="suggested-section-body suggested-right">
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/a/9/c/3/a9c37ac359beee75b6fcec3ce011c0bd.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Sao-Em-No/ZW9CAW7I"
                    >
                      Sao Em Nỡ
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/JayKii">JayKii</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/0/8/5/3/0853118a8d14808d8526bc717409ac90.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Dung-Nhu-Thoi-Quen/ZW9C0WDI"
                    >
                      Đừng Như Thói Quen
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/JayKii">JayKii</a>
                      <a href="/artist/luu-ngoc-duyen">Sara Lưu</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/d/a/c/f/dacfd14769f71396f0e4e372c69e950c.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/No-Boyfriend/ZW9C88A9"
                    >
                      No Boyfriend
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/Hoang-Yen-Chibi">Hoàng Yến Chibi</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/a/9/0/8/a90839d864c557bc429152e90bc231f3.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Duyen-Minh-Lo/ZW9CBEEO"
                    >
                      Duyên Mình Lỡ
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/Huong-Tram">Hương Tràm</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/5/1/a/2/51a215c16d9cac85df39f36011fc4277.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Thuong-Em-Thuong-Lam/ZW9C7IDA"
                    >
                      Thương Em Thương Lắm
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/Chi-Dan">Chi Dân</a>
                      <a href="/artist/BAK"> Bảo Kun</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/6/1/4/e/614e4c33a348b1abd9cfd19d090f17c4.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Ain’t-Nobody-Love-You/ZW9C90ZO"
                    >
                      Ain’t Nobody Love You
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/Nguyên.">Nhiều Nghệ Sĩ</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/8/6/6/0/8660e4f26c09947237cf11bdda012a99.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Tam-Su-Tuoi-30-Ong-Ngoai-Tuoi-30-OST/ZW9B8EW0"
                    >
                      Tâm Sự Tuổi 30 (Ông Ngoại Tuổi 30 OST)
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/Trinh-Thang-Binh">Trịnh Thăng Bình</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/covers/a/d/ad67a7fbc0b8ad7eac660eb803cdeb21_1514533626.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Cung-Anh/ZW9A7W00"
                    >
                      Cùng Anh
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/Ngoc-Dolil">Ngọc Dolil</a>
                      <a href="/artist/Hagi">Hagi</a>
                      <a href="/artist/STee"> STee</a>
                    </div>
                  </div>
                </div>
                <div className="suggested-song">
                  <img
                    src="https://zmp3-photo.zadn.vn/thumb/94_94/cover/0/b/b/5/0bb55eaf1f19451a075759258eab718d.jpg"
                    alt=""
                  />
                  <div className="suggested-song-info">
                    <a
                      className="suggested-song-name"
                      href="/song/Roi-Nguoi-Thuong-Cung-Hoa-Nguoi-Dung/ZW9C0DWE"
                    >
                      Rồi Người Thương Cũng Hóa Người Dưng
                    </a>
                    <div className="comma trackArtist">
                      <a href="/artist/Hien-Ho">Hiền Hồ</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SongPage;
