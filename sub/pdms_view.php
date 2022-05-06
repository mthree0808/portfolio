<?php
$dp1 = "sub";
$dp2 = "pdms";
?>

<?php include "../inc/header.php" ?>
<div class="contents">
    <div class="svisual">
        <span class="bg"></span>
        <a href="javascript:history.back()" title="이전">Previous</a>
        <div class="cont">
            <h2>
                <?=$name_pdms_t1?>
                <span><?=$name_pdms_t2?></span>
            </h2>
            <ul>
                <li>
                    <dl>
                        <dt>Type.</dt>
                        <dd><?=$type_wa?></dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>Role.</dt>  
                        <dd><?=$role?></dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>Open.</dt>
                        <dd><?=$name_pdms_op?></dd>
                    </dl>
                </li>
            </ul>
            <span>내부 관리자 시스템으로 링크가 제공되지 않습니다.</span>
        </div>
    </div>
    <div class="ov_area">
        <dl>
            <dt>Overview</dt>
            <dd><?=$name_pdms_ov?></dd>
        </dl>
    </div>
    <div class="section1">
        <ul class="mock_list">
            <li>
                <a href="<?=$link_pdms_login?>" class="login shadow7" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li>
            <li>
                <a href="<?=$link_pdms_intro_m?>" class="intro_m type306 bdw bdradi shadow3_2" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li>        
        </ul>
        <div class="wrap">
            <a href="<?=$link_pdms_main?>" class="frame main type946 shadow3" title="원본 디자인 보기 새 창" target="_blank">
                <span class="top"></span>
                <span class="bottom"></span>
                <div class="frame_top main type946"></div>
            </a>
        </div>
    </div>
    <div class="section2">
        <ul class="wrap">
            <li>
                <ul class="menu">
                    <li class="st1"></li>
                    <li class="st2"></li>
                    <li class="st3"></li>
                </ul>
                <a href="<?=$link_pdms_main_m?>" class="frame main_m_2 type396" title="원본 디자인 보기 새 창" target="_blank">
                    <div class="frame_top main_m_1 type396 bdbl bdradi"></div>                
                </a>
            </li>
            <li>
                <div class="inner">
                    <a href="<?=$link_pdms_sub_w_1?>" class="sub_w_1 type1126 bdbl bdradi" title="원본 디자인 보기 새 창" target="_blank"></a>
                    <h3 class="sub_tit">제품 일정에 대한 확실한 소통<span>여러 부서에서 변경사유 및 이슈에 대해 자체적인 체킹이 가능하여, 불필요한 소통을 제거하는 프로세스</span></h3>
                    <a href="<?=$link_pdms_sub_m_1?>" class="sub_m_1 type396 bdbl bdradi" title="원본 디자인 보기 새 창" target="_blank"></a>
                </div>
            </li>
        </ul>
    </div>
    <div class="section3">
        <div class="wrap">
            <div><img src="../images/sub/pdms/illu.png" alt=""></div>
            <ul class="mock_list">
                <li>
                    <a href="<?=$link_pdms_sub_m_2?>" class="sub_m_2 type318 bdbl bdradi shadow3_2" title="원본 디자인 보기 새 창" target="_blank"></a>
                </li>
                <li>
                    <a href="<?=$link_pdms_sub_w_2?>" class="sub_w_2 type1400 bdbl bdradi shadow3_2" title="원본 디자인 보기 새 창" target="_blank"></a>
                </li>        
            </ul>
        </div>
    </div>
    <div class="section4">
        <ul class="mock_list">
            <li class="issue1">
                <a href="<?=$link_pdms_sub_w_3?>" class="sub_w_3 type1400 bdbl bdradi shadow3_2" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li>
            <li class="issue2">
                <a href="<?=$link_pdms_sub_m_3?>" class="sub_m_3 type318 bdbl bdradi shadow3_2" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li>  
            <li class="issue3">
                <a href="<?=$link_pdms_sub_m_4?>" class="sub_m_4 type318 bdbl bdradi shadow3_2" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li> 
            <li class="issue4">
                <a href="<?=$link_pdms_sub_m_5?>" class="sub_m_5 type318 bdbl bdradi shadow3_2" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li> 
        </ul>
    </div>
    <div class="info">
        <div class="wrap">
            <dl>
                <dt>Color</dt>
                <dd>
                    <ul>
                        <li class="st1">
                            <span>#ff9000</span>
                        </li>
                        <li class="st2">
                            <span>#ff6e8f</span>
                        </li>
                        <li class="st3">
                            <span>#259fc9</span>
                        </li>
                        <li class="st4">
                            <span>#074d88</span>
                        </li>     
                        <li class="st5">
                            <span>#213749</span>
                        </li>  
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>Typography</dt>
                <dd>
                    <ul>
                        <li>
                            KOR
                            <span class="notokrB">Noto Sans CJK KR</span>
                        </li>
                        <li>
                            ENG, NUMBER
                            <span class="robotoB">Roboto</span>
                        </li>
                    </ul>

                </dd>
            </dl>
        </div>
    </div>
    <div class="common">
        <a href="<?=$link_main?>" title="메인으로 이동">
            <i></i>
        </a>
        <ul>
            <li class="ansan">
                <a href="<?=$link_ansan?>" title="이전 프로젝트">
                    <span>Prev Project</span>
                </a>
            </li>
            <li class="privacy">
                <a href="<?=$link_privacy?>" title="다음 프로젝트">
                    <span>Next Project</span>
                </a>
            </li>
        </ul>
    </div>
</div>
<?php include "../inc/footer.php" ?>