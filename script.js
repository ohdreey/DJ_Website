
    animate(document.getElementById('bar1'), [350, 250, 310, 150]);
    animate(document.getElementById('bar2'), [50, 150, 100, 350]);
    animate(document.getElementById('bar3'), [300, 200, 250, 100]);
    animate(document.getElementById('bar4'), [375, 145, 215, 95]);
    animate(document.getElementById('bar5'), [75, 115, 80, 235]);
    animate(document.getElementById('bar6'), [175, 45, 195, 115]);
    animate(document.getElementById('bar7'), [215, 145, 300, 95]);
    animate(document.getElementById('bar8'), [55, 345, 145, 250]);
    animate(document.getElementById('bar9'), [350, 250, 310, 150]);
    animate(document.getElementById('bar10'),[50, 150, 100, 350]);
    animate(document.getElementById('bar11'),[300, 200, 250, 100]);
    animate(document.getElementById('bar12'),[375, 145, 215, 95]);
    animate(document.getElementById('bar13'),[75, 115, 80, 235]);
    animate(document.getElementById('bar14'),[175, 45, 195, 115]);
    animate(document.getElementById('bar15'),[215, 145, 300, 95]);
    animate(document.getElementById('bar16'),[55, 345, 145, 250]);

    function animate(element, heights) {
        let currentHeight = 0;
        let loop = 0;

        setInterval(function() {
            if (currentHeight === heights[loop]) {
                loop++;

                if (!heights[loop]) {
                    loop = 0;
                }
            } else {
                if (currentHeight > heights[loop]) {
                    currentHeight--;
                } else {
                    currentHeight++;
                }

                element.style.height = currentHeight + 'px';
            }
        }, 5);
    }

    // if (window.matchMedia("(min-width: 600px)").matches) {
        /* La largeur minimum de l'affichage est 600 px inclus /
      } else {
        / L'affichage est inférieur à 600px de large */
      //}