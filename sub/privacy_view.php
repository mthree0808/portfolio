<?php
$dp1 = "sub";
$dp2 = "privacy";
?>

<?php include "../inc/header.php" ?>
<div class="contents">
    <div class="svisual">
        <span class="bg"></span>
        <span class="ai"></span>
        <span class="hand"></span>
        <a href="javascript:history.back()" title="이전">Previous</a>
        <div class="cont">
            <h2>
                <?=$name_privacy_t1?>
                <span><?=$name_privacy_t2?></span>
            </h2>
            <ul>
                <li>
                    <dl>
                        <dt>Type.</dt>
                        <dd><?=$type_w?></dd>
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
                        <dd><?=$name_privacy_op?></dd>
                    </dl>
                </li>
            </ul>
            <span>내부 관리자 시스템으로 링크가 제공되지 않습니다.</span>
        </div>
    </div>
    <div class="ov_area">
        <dl>
            <dt>Overview</dt>
            <dd><?=$name_privacy_ov?></dd>
        </dl>
    </div>
    <div class="main_area">
        <a href="<?=$link_privacy_main?>" title="원본 디자인 보기 새 창" class="frame main type1340 shadow3" target="_blank">
            <div class="frame_top main type1388 bdbl"></div>
        </a>
    </div>
    <div class="section1">  
        <ul class="mock_list">
            <li class="issue1">
                <h3 class="sub_tit">Sub Design</h3>
                <a href="<?=$link_privacy_sub_w_1?>" class="sub_w_1 type980 bdbl bdradi shadow3" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li>
            <li class="issue2">
                <a href="<?=$link_privacy_sub_w_2?>" class="sub_w_2 type980 bdbl bdradi shadow3" title="원본 디자인 보기 새 창" target="_blank"></a>
                <i></i>
            </li>            
        </ul>
        <ul class="mock_list">
            <li>
                <a href="<?=$link_privacy_sub_w_3?>" class="sub_w_3 type1400 bdbl bdradi shadow3" title="원본 디자인 보기 새 창" target="_blank"></a>
                <ul>
                    <li class="issue1">
                        <a href="<?=$link_privacy_sub_w_4?>" class="sub_w_4 type980 bdradi shadow6" title="원본 디자인 보기 새 창" target="_blank"></a>
                    </li>
                    <li class="issue2">
                        <a href="<?=$link_privacy_sub_w_5?>" class="sub_w_5 type980 bdradi shadow6" title="원본 디자인 보기 새 창" target="_blank"></a>
                    </li>
                    <li class="issue3">
                        <a href="<?=$link_privacy_sub_w_6?>" class="sub_w_6 type980 bdradi shadow6" title="원본 디자인 보기 새 창" target="_blank"></a>
                    </li>
                </ul>
            </li>         
        </ul>
    </div>
    <div class="section2">
        <ul class="mock_list">
            <li>
                <a href="<?=$link_privacy_sub_w_7?>" class="sub_w_7 type980 bdbl bdradi" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li>     
            <li>
                <a href="<?=$link_privacy_sub_w_8?>" class="sub_w_8 type980 bdbl bdradi" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li>   
        </ul>
        <ul class="mock_list">
            <li>
                <a href="<?=$link_privacy_sub_w_9?>" class="sub_w_9 type980 bdbl bdradi" title="원본 디자인 보기 새 창" target="_blank"></a>
            </li>     
            <li>
                <a href="<?=$link_privacy_sub_w_10?>" class="sub_w_10 type980 bdbl bdradi" title="원본 디자인 보기 새 창" target="_blank"></a>
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
                            <span>#16a6fd</span>
                        </li>
                        <li class="st2">
                            <span>#03c6a8</span>
                        </li>
                        <li class="st3">
                            <span>#f96796</span>
                        </li>
                        <li class="st4">
                            <span>#6574cf</span>
                        </li>
                        <li class="st5">
                            <span>#415866</span>
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
                            KOR
                            <span class="gmarketB">G마켓 산스</span>
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
            <li class="pdms">
                <a href="<?=$link_pdms?>" title="이전 프로젝트">
                    <span>Prev Project</span>
                </a>
            </li>
            <li class="asvoting">
                <a href="<?=$link_asvoting?>" title="다음 프로젝트">
                    <span>Next Project</span>
                </a>
            </li>
        </ul>
    </div>
</div>
<?php include "../inc/footer.php" ?>