<?php
$dp1 = "sub";
$dp2 = "asvoting";
?>

<?php include "../inc/header.php" ?>
<div class="contents">
    <div class="svisual">
        <span class="bg"></span>
        <span class="p3"></span>
        <a href="javascript:history.back()" title="이전">Previous</a>
        <div class="cont">
            <h2>
                <?=$name_asvoting_t1?>
                <span><?=$name_asvoting_t2?></span>
            </h2>
            <ul>
                <li>
                    <dl>
                        <dt>Type.</dt>
                        <dd><?=$type_wm?></dd>
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
                        <dd><?=$name_asvoting_op?></dd>
                    </dl>
                </li>
            </ul>
            <a href="<?=$link_asvoting_hp?>" target="_blank" title="새 창"><span>사이트 바로가기</span></a>
        </div>
    </div>
    <div class="ov_area">
        <span class="p1"></span>
        <span class="p2"></span>
        <dl>
            <dt>Overview</dt>
            <dd><?=$name_asvoting_ov?></dd>
        </dl>
    </div>
    <div class="main_area">
        <span class="l_c"></span>
        <span class="r_c"></span>
        <a href="<?=$link_asvoting_main?>" title="원본 디자인 보기 새 창" class="frame main_bgno type1340" target="_blank">
            <div class="frame_top main_bgno type1388 bdbl"></div>
        </a>
    </div>
    <div class="section1">  
        <h3 class="sub_tit">Sub Design</h3>
        <ul class="mock_list issue1">
            <li>
                <a href="<?=$link_asvoting_sub_w_1?>" class="sub_w_1 type1400" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li>     
        </ul>
        <ul class="mock_list issue2">
            <li>
                <a href="<?=$link_asvoting_sub_w_2?>" class="sub_w_2 type810" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li>     
            <li>
                <a href="<?=$link_asvoting_sub_w_3?>" class="sub_w_3 type810" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li>                
        </ul>    
    </div>
    <div class="section2">
        <ul class="mock_list issue1">
            <li>
                <a href="<?=$link_asvoting_sub_w_4?>" class="sub_w_4 type1100 bdradi bdbl" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li>     
            <li>
                <a href="<?=$link_asvoting_sub_w_5?>" class="sub_w_5 type1100 bdradi bdbl" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li>                
        </ul>    
        <ul class="mock_list issue2">
            <li>
                <a href="<?=$link_asvoting_sub_w_6?>" class="sub_w_6 type1100 bdradi bdbl" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li>                  
        </ul>            
    </div>
    <div class="section3">
        <div class="wrap">
            <h3 class="sub_tit">Mobile Design</h3>
            <ul class="icon_area">
                <li class="st1"></li>
                <li class="st2"></li>
                <li class="st3"></li>
                <li class="st4"></li>
                <li class="st5"></li>
                <li class="st6"></li>
                <li class="st7"></li>
            </ul>
            <ul class="mock_list">
                <li class="issue1">
                    <a href="<?=$link_asvoting_sub_m_1?>" class="sub_m_1 type318 bdradi bdbl" title="원본 디자인 보기 새 창" target="_blank"></a>
                </li>     
                <li class="issue2">
                    <a href="<?=$link_asvoting_main_m?>" class="main_m type318 bdradi bdbl" title="원본 디자인 보기 새 창" target="_blank"></a>
                </li> 
                <li class="issue3">
                    <a href="<?=$link_asvoting_sub_m_2?>" class="sub_m_2 type318 bdradi bdbl" title="원본 디자인 보기 새 창" target="_blank"></a>
                </li>                 
                <li class="issue4">
                    <a href="<?=$link_asvoting_sub_m_3?>" class="sub_m_3 type318 bdradi bdbl" title="원본 디자인 보기 새 창" target="_blank"></a>
                </li>     
                <li class="issue5">
                    <a href="<?=$link_asvoting_sub_m_4?>" class="sub_m_4 type318 bdradi bdbl" title="원본 디자인 보기 새 창" target="_blank"></a>
                </li>                   
                <li class="issue6">
                    <a href="<?=$link_asvoting_sub_m_5?>" class="sub_m_5 type318 bdradi bdbl" title="원본 디자인 보기 새 창" target="_blank"></a>
                </li>   
            </ul>               
        </div>
    </div>
    <div class="info">
        <div class="wrap">
            <dl>
                <dt>Color</dt>
                <dd>
                    <ul>
                        <li class="st1">
                            <span>#398de7</span>
                        </li>
                        <li class="st2">
                            <span>#ffae00</span>
                        </li>
                        <li class="st3">
                            <span>#403899</span>
                        </li>
                        <li class="st4">
                            <span>#75c00b</span>
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
            <li class="privacy">
                <a href="<?=$link_privacy?>" title="이전 프로젝트">
                    <span>Prev Project</span>
                </a>
            </li>
            <li class="sports">
                <a href="<?=$link_sports?>" title="다음 프로젝트">
                    <span>Next Project</span>
                </a>
            </li>
        </ul>
    </div>
</div>
<?php include "../inc/footer.php" ?>